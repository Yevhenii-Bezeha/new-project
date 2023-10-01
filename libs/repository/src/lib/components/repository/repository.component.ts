import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { GitUrlConverterPipe, RoutesEnum } from 'shared-core';

import { IRepository } from '../../models/repository';
import { RepositoryService } from '../../services/repository/repository.service';

import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardContentComponent } from './card-content/card-content.component';

@Component({
    selector: 'lib-repository',
    standalone: true,
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatCardModule,
        CardContentComponent,
        CardActionsComponent,
        RouterOutlet,
        NgOptimizedImage,
        GitUrlConverterPipe,
        NgIf,
        AsyncPipe,
        MatButtonModule
    ]
})
export class RepositoryComponent implements OnInit, OnDestroy {
    routes: typeof RoutesEnum = RoutesEnum;
    isIssuesRoute$!: Observable<boolean>;
    repository: IRepository | null = null;

    constructor(private repositoryService: RepositoryService, private router: Router) {}

    ngOnInit() {
        this.repository = this.repositoryService.getRepositoryDetails();

        this.isIssuesRoute$ = this.router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
                map((event: NavigationEnd) => event.url.includes('issues'))
            );
    }

    ngOnDestroy() {
        this.repositoryService.setRepositoryDetails(null);
    }
}
