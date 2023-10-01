import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseList, ErrorService } from 'shared-core';
import { PaginatorComponent } from 'shared-ui';

import { RepositoryService } from '../../services/repository/repository.service';

import { RepositoriesListComponent } from './repositories-list/repositories-list.component';

@Component({
    selector: 'lib-repositories',
    standalone: true,
    templateUrl: './repositories.component.html',
    styleUrls: ['./repositories.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatProgressSpinnerModule, NgIf, RepositoriesListComponent, PaginatorComponent]
})
export class RepositoriesComponent extends BaseList implements OnInit {
    constructor(
        private repositoryService: RepositoryService,
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
            this.repositoryService.getRepositoriesList({
                page: this.pageIndex + 1,
                per_page: this.pageSize
            })
        );
    }
}
