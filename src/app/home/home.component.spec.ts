import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'shared-core';

import HomeComponent from './home.component';

jest.mock('../../../libs/shared/core/src/lib/services/auth/auth.service');

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let authServiceMock: jest.Mocked<AuthService>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent, RouterTestingModule],
            providers: [{ provide: AuthService, useFactory: AuthService }]
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        authServiceMock = TestBed.inject(AuthService) as jest.Mocked<AuthService>;
        fixture.detectChanges();
    });

    it('should show correct title and cta text if user is not logged in', () => {
        const elementTitle = fixture.debugElement.query(By.css('.title'));
        const titleText = elementTitle.nativeElement.textContent;
        const elementCtaText = fixture.debugElement.query(By.css('.cta-text'));
        const ctaText = elementCtaText.nativeElement.textContent;

        expect(titleText).toContain('Welcome to GitHubExplorer');
        expect(ctaText).toContain('Log In to start Your Journey');
    });

    it('should show correct title and cta text if user is logged in', () => {
        authServiceMock.isLoggedIn.mockReturnValue(true);
        component.ngOnInit();
        fixture.detectChanges();

        const elementTitle = fixture.debugElement.query(By.css('.title'));
        const titleText = elementTitle.nativeElement.textContent;
        const elementCtaText = fixture.debugElement.query(By.css('.cta-text'));
        const ctaText = elementCtaText.nativeElement.textContent;

        expect(titleText).toContain('You are now logged in');
        expect(ctaText).toContain('Your Hub for GitHub');
    });
});
