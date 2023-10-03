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
                title: 'Auth page',
                path: RoutesEnum.Auth,
                loadChildren: () => import('auth/routes')
            },
            {
                title: 'Home page',
                path: RoutesEnum.Home,
                loadComponent: () => import('./home/home.component')
            },
            {
                title: 'Users list page',
                path: RoutesEnum.Users,
                canActivate: [authGuard],
                loadChildren: () => import('user/routes')
            },
            {
                title: 'Repositories list page',
                path: RoutesEnum.Repositories,
                canActivate: [authGuard],
                loadChildren: () => import('repository/routes')
            }
        ]
    }
];
