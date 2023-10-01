import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RepositoryService } from '../../../services/repository/repository.service';

import { RepositoriesListComponent } from './repositories-list.component';

jest.mock('../../../services/repository/repository.service');

describe('RepositoriesListComponent', () => {
    let component: RepositoriesListComponent;
    let fixture: ComponentFixture<RepositoriesListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RepositoriesListComponent, RouterTestingModule],
            providers: [{ provide: RepositoryService, useFactory: RepositoryService }]
        }).compileComponents();

        fixture = TestBed.createComponent(RepositoriesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
