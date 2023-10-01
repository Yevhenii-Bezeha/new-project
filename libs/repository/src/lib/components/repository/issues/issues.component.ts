import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseList, ErrorService } from 'shared-core';
import { PaginatorComponent } from 'shared-ui';

import { IRepository } from '../../../models/repository';
import { RepositoryService } from '../../../services/repository/repository.service';

@Component({
    selector: 'lib-issues',
    standalone: true,
    templateUrl: './issues.component.html',
    styleUrls: ['./issues.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatProgressSpinnerModule, MatListModule, MatIconModule, PaginatorComponent, NgIf, NgForOf, DatePipe]
})
export class IssuesComponent extends BaseList implements OnInit {
    repository: IRepository | null = null;
    constructor(
        private repositoryService: RepositoryService,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override errorService: ErrorService
    ) {
        super(router, route, errorService);
    }

    ngOnInit() {
        this.repository = this.repositoryService.getRepositoryDetails();

        if (this.repository?.full_name) {
            this.localFetchData(this.repository.full_name);
        }
    }

    async onPageEvent(pageEvent: PageEvent): Promise<void> {
        await this.generalOnPageEvent(pageEvent);

        if (this.repository) {
            this.localFetchData(this.repository.full_name);
        }
    }

    private localFetchData(repositoryFullName: string): void {
        this.fetchData(
            this.repositoryService.getIssuesPerRepo(repositoryFullName, {
                page: this.pageIndex + 1,
                per_page: this.pageSize
            })
        );
    }
}
