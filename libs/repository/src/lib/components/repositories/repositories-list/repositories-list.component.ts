import { DatePipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { NumberFormatPipe, RoutesEnum, SearchResult } from 'shared-core';
import { E2EDirective } from 'shared-core';

import { IRepository } from '../../../models/repository';
import { RepositoryService } from '../../../services/repository/repository.service';

@Component({
    selector: 'lib-repositories-list',
    standalone: true,
    templateUrl: './repositories-list.component.html',
    styleUrls: ['./repositories-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatListModule, MatIconModule, DatePipe, NumberFormatPipe, NgForOf, E2EDirective]
})
export class RepositoriesListComponent {
    @Input({ required: true }) response!: SearchResult;

    constructor(private router: Router, private repositoryService: RepositoryService) {}

    async goToRepositoryDetails(repository: IRepository): Promise<void> {
        await this.router.navigate([RoutesEnum.Repositories, repository.name]);

        this.repositoryService.setRepositoryDetails(repository);
    }

    trackByFn(_: number, item: IRepository) {
        return item.created_at;
    }
}
