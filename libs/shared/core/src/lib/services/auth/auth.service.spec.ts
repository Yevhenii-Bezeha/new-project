import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    let authService: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService]
        });
        authService = TestBed.inject(AuthService);
    });

    it('should set logged in status to true', () => {
        authService.setLoggedIn(true);

        expect(authService.isLoggedIn()).toBe(true);
    });

    it('should set logged in status to false', () => {
        authService.setLoggedIn(true);
        authService.setLoggedIn(false);

        expect(authService.isLoggedIn()).toBe(false);
    });
});
