import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GitUrlConverterPipe } from 'shared-core';

import { RepositoryService } from '../../services/repository/repository.service';

import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardContentComponent } from './card-content/card-content.component';
import { RepositoryComponent } from './repository.component';

jest.mock('./card-actions/card-actions.component');
jest.mock('./card-content/card-content.component');
jest.mock('../../services/repository/repository.service');

describe('RepositoryComponent', () => {
    let component: RepositoryComponent;
    let fixture: ComponentFixture<RepositoryComponent>;
    let repositoriesServiceMock: jest.Mocked<RepositoryService>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RepositoryComponent,
                CardContentComponent,
                CardActionsComponent,
                GitUrlConverterPipe,
                RouterTestingModule
            ],
            providers: [{ provide: RepositoryService, useFactory: RepositoryService }]
        }).compileComponents();

        fixture = TestBed.createComponent(RepositoryComponent);
        repositoriesServiceMock = TestBed.inject(RepositoryService) as jest.Mocked<RepositoryService>;
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should clear repository details history on component destroy', () => {
        component.ngOnDestroy();

        expect(repositoriesServiceMock.setRepositoryDetails).toHaveBeenCalledWith(null);
    });
});
