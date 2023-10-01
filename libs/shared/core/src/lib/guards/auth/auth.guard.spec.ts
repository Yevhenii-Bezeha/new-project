import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { ErrorService } from '../../services/error/error.service';

import { authGuard } from './auth.guard';

jest.mock('../../services/auth/auth.service');
jest.mock('../../services/error/error.service');

describe('authGuard', () => {
    let authServiceMock: jest.Mocked<AuthService>;
    let errorServiceMock: jest.Mocked<ErrorService>;
    let routerMock: jest.Mocked<Router>;
    const mockRoute = { params: { id: 100 } } as unknown as ActivatedRouteSnapshot;

    beforeEach(() => {
        routerMock = {
            navigate: jest.fn()
        } as unknown as jest.Mocked<Router>;
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useFactory: AuthService },
                { provide: ErrorService, useFactory: ErrorService },
                { provide: Router, useValue: routerMock }
            ]
        });

        authServiceMock = TestBed.inject(AuthService) as jest.Mocked<AuthService>;
        errorServiceMock = TestBed.inject(ErrorService) as jest.Mocked<ErrorService>;
    });

    it('should allow access when the user is logged in', async () => {
        authServiceMock.isLoggedIn.mockReturnValue(true);

        const result = await TestBed.runInInjectionContext(() => authGuard(mockRoute, {} as RouterStateSnapshot));

        expect(result).toBe(true);
    });

    it('should navigate to /auth and set an error when the user is not logged in', async () => {
        authServiceMock.isLoggedIn.mockReturnValue(false);

        const result = await TestBed.runInInjectionContext(() => authGuard(mockRoute, {} as RouterStateSnapshot));

        expect(result).toBe(false);
        expect(routerMock.navigate).toHaveBeenCalledWith(['/auth']);
        expect(errorServiceMock.setError).toHaveBeenCalledWith(
            'You\'re not logged in. Please log in to see the content'
        );
    });
});
