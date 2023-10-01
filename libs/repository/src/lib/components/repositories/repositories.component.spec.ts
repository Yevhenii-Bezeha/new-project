import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PageEvent } from '@angular/material/paginator';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorService } from 'shared-core';
import { PaginatorComponent } from 'shared-ui';

import { RepositoryService } from '../../services/repository/repository.service';

import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { RepositoriesComponent } from './repositories.component';

jest.mock('../../../../../shared/core/src/lib/services/error/error.service');
jest.mock('../../services/repository/repository.service');
jest.mock('./repositories-list/repositories-list.component');
jest.mock('../../../../../shared/ui/src/lib/components/paginator/paginator.component');

describe('RepositoriesComponent', () => {
    let component: RepositoriesComponent;
    let fixture: ComponentFixture<RepositoriesComponent>;
    let repositoriesServiceMock: jest.Mocked<RepositoryService>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RepositoriesComponent, RouterTestingModule, RepositoriesListComponent, PaginatorComponent],
            providers: [
                { provide: ErrorService, useFactory: ErrorService },
                { provide: RepositoryService, useFactory: RepositoryService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(RepositoriesComponent);
        repositoriesServiceMock = TestBed.inject(RepositoryService) as jest.Mocked<RepositoryService>;
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should load repositories list', () => {
        const fetchDataSpy = jest.spyOn(component, 'fetchData');

        component.ngOnInit();

        // eslint-disable-next-line jest/prefer-called-with
        expect(fetchDataSpy).toHaveBeenCalled();
        expect(repositoriesServiceMock.getRepositoriesList).toHaveBeenCalledWith({
            page: 1,
            per_page: 30
        });
    });

    it('should find correct title', () => {
        component.ngOnInit();

        const elementTitle = fixture.debugElement.query(By.css('.title'));
        const titleText = elementTitle.nativeElement.textContent;

        expect(titleText).toContain('Public Repositories');
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
        expect(repositoriesServiceMock.getRepositoriesList).toHaveBeenCalledWith({
            page: 1,
            per_page: 30
        });
    }));
});
