import { NgForOf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { RoutesEnum, SearchResult } from 'shared-core';

import { IUserDetails } from '../../../models/user-details';

@Component({
    selector: 'lib-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatListModule, MatCardModule, NgForOf, NgOptimizedImage]
})
export class UsersListComponent {
    @Input({ required: true }) response!: SearchResult;

    constructor(private router: Router) {}

    async goToUserDetails(userLogin: string): Promise<void> {
        await this.router.navigate([RoutesEnum.Users, userLogin]);
    }

    trackByFn(_: number, item: IUserDetails) {
        return item.created_at;
    }
}
