import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PageEvent } from '@angular/material/paginator';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorService } from 'shared-core';
import { PaginatorComponent } from 'shared-ui';

import { IRepository } from '../../../models/repository';
import { RepositoryService } from '../../../services/repository/repository.service';

import { IssuesComponent } from './issues.component';

jest.mock('../../../../../../shared/ui/src/lib/components/paginator/paginator.component');
jest.mock('../../../services/repository/repository.service');
jest.mock('../../../../../../shared/core/src/lib/services/error/error.service');

describe('IssuesComponent', () => {
    let component: IssuesComponent;
    let fixture: ComponentFixture<IssuesComponent>;
    let repositoriesServiceMock: jest.Mocked<RepositoryService>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IssuesComponent, PaginatorComponent, RouterTestingModule],
            providers: [
                { provide: ErrorService, useFactory: ErrorService },
                { provide: RepositoryService, useFactory: RepositoryService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(IssuesComponent);
        repositoriesServiceMock = TestBed.inject(RepositoryService) as jest.Mocked<RepositoryService>;
        repositoriesServiceMock.getRepositoryDetails.mockReturnValue({ full_name: 'mock' } as IRepository);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should load issues list', () => {
        const fetchDataSpy = jest.spyOn(component, 'fetchData');

        component.ngOnInit();

        // eslint-disable-next-line jest/prefer-called-with
        expect(fetchDataSpy).toHaveBeenCalled();
        expect(repositoriesServiceMock.getIssuesPerRepo).toHaveBeenCalledWith('mock', {
            page: 1,
            per_page: 30
        });
    });

    it('should find correct title', () => {
        component.ngOnInit();

        const elementTitle = fixture.debugElement.query(By.css('.title'));
        const titleText = elementTitle.nativeElement.textContent;

        expect(titleText).toContain('Issues');
    });

    it('should load new repositories list on page change', fakeAsync(() => {
        const fetchDataSpy = jest.spyOn(component, 'fetchData');
        const pageEventSpy = jest.spyOn(component, 'onPageEvent');

        void component.onPageEvent({} as PageEvent);
        tick();

        // eslint-disable-next-line jest/prefer-called-with
        expect(fetchDataSpy).toHaveBeenCalled();
        // eslint-disable-next-line jest/prefer-called-with
        expect(pageEventSpy).toHaveBeenCalled();
        expect(repositoriesServiceMock.getIssuesPerRepo).toHaveBeenCalledWith('mock', {
            page: 1,
            per_page: 30
        });
    }));
});
