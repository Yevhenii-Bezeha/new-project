import { Routes } from '@angular/router';
import { RoutesEnum } from 'shared-core';

import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        pathMatch: 'full'
    },
    {
        path: `:${RoutesEnum.UserLogin}`,
        component: UserComponent,
        pathMatch: 'full',
        title: 'User details page'
    }
];

export default routes;
