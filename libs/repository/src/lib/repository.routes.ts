import { Routes } from '@angular/router';
import { RoutesEnum } from 'shared-core';

import { RepositoriesComponent } from './components/repositories/repositories.component';
import { IssuesComponent } from './components/repository/issues/issues.component';
import { RepositoryComponent } from './components/repository/repository.component';

export const routes: Routes = [
    {
        path: '',
        component: RepositoriesComponent,
        pathMatch: 'full'
    },
    {
        path: `:${RoutesEnum.RepositoryName}`,
        component: RepositoryComponent,
        title: 'Repository details page',
        children: [
            {
                path: RoutesEnum.Issues,
                component: IssuesComponent,
                title: 'Repository Issues page'
            }
        ]
    }
];

export default routes;
