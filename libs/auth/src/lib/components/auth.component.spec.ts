import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService, ErrorService, OctokitGeneralService } from 'shared-core';

import AuthComponent from './auth.component';

jest.mock('../../../../shared/core/src/lib/services/auth/auth.service');
jest.mock('.../../../../shared/core/src/lib/services/octokit-general/octokit-general.service');
jest.mock('../../../../shared/core/src/lib/services/error/error.service');

describe('AuthComponent', () => {
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;
    let octokitGeneralServiceMock: jest.Mocked<OctokitGeneralService>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AuthComponent, ReactiveFormsModule, RouterTestingModule, BrowserAnimationsModule],
            providers: [
                { provide: OctokitGeneralService, useFactory: OctokitGeneralService },
                { provide: AuthService, useFactory: AuthService },
                { provide: ErrorService, useFactory: ErrorService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AuthComponent);
        octokitGeneralServiceMock = TestBed.inject(OctokitGeneralService) as jest.Mocked<OctokitGeneralService>;
        component = fixture.componentInstance;
    });

    it('should show correct title', () => {
        const elementTitle = fixture.debugElement.query(By.css('.title'));
        const titleTextH1 = elementTitle.nativeElement.textContent;

        expect(titleTextH1).toContain('Log In');
    });

    it('should make auth call on submit', () => {
        component.form.controls.input.patchValue('mock');
        fixture.detectChanges();

        component.submit();

        expect(octokitGeneralServiceMock.auth).toHaveBeenCalledWith('mock');
    });
});
