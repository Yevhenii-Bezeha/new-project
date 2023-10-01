import { Routes } from '@angular/router';

import AuthComponent from './components/auth.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        title: 'Auth'
    }
];

export default routes;
