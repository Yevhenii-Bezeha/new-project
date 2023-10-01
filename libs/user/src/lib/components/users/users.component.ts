import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseList, ErrorService } from 'shared-core';
import { PaginatorComponent } from 'shared-ui';

import { UsersService } from '../../services/users/users.service';

import { UsersListComponent } from './users-list/users-list.component';

@Component({
    selector: 'lib-user',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatProgressSpinnerModule, UsersListComponent, PaginatorComponent, NgIf]
})
export class UsersComponent extends BaseList implements OnInit {
    constructor(
        private usersService: UsersService,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override errorService: ErrorService
    ) {
        super(router, route, errorService);
    }

    ngOnInit() {
        this.localFetchData();
    }

    async onPageEvent(pageEvent: PageEvent): Promise<void> {
        await this.generalOnPageEvent(pageEvent);

        this.localFetchData();
    }

    private localFetchData(): void {
        this.fetchData(
            this.usersService.getUsersList({
                page: this.pageIndex + 1,
                per_page: this.pageSize
            })
        );
    }
}
