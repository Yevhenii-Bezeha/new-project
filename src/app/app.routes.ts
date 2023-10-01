import { Route } from '@angular/router';
import { authGuard, RoutesEnum } from 'shared-core';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: RoutesEnum.Home,
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: RoutesEnum.Auth,
                loadChildren: () => import('auth/routes')
            },
            {
                path: RoutesEnum.Home,
                loadComponent: () => import('./home/home.component')
            },
            {
                path: RoutesEnum.Users,
                canActivate: [authGuard],
                loadChildren: () => import('user/routes')
            },
            {
                path: RoutesEnum.Repositories,
                canActivate: [authGuard],
                loadChildren: () => import('repository/routes')
            }
        ]
    }
];
