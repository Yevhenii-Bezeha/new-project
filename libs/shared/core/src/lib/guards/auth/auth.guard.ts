import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService, ErrorService } from '../../services';

export const authGuard: CanActivateFn = async () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const errorService = inject(ErrorService);

    if (authService.isLoggedIn()) {
        return true;
    }

    await router.navigate(['/auth']);

    errorService.setError(
        'You\'re not logged in. Please log in to see the content'
    );

    return false;
};
