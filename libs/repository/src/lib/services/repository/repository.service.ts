import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponseModel, ILoadOptions, OctokitGeneralService, SearchResult } from 'shared-core';

import { IRepository } from '../../models/repository';

@Injectable({
    providedIn: 'root'
})
export class RepositoryService {
    private repository: WritableSignal<IRepository | null> = signal<IRepository | null>(null);
    constructor(private octokitGeneralService: OctokitGeneralService) {}

    getRepositoryDetails(): IRepository | null {
        return this.repository();
    }

    setRepositoryDetails(repository: IRepository | null): void {
        this.repository.set(repository);
    }

    getRepositoriesList(options: ILoadOptions): Observable<GenericResponseModel<SearchResult>> {
        return this.octokitGeneralService.convertToObservable(
            this.octokitGeneralService.rest().search.repos({
                order: 'desc',
                sort: 'stars',
                q: 'is:public stars:>10',
                per_page: options.per_page,
                page: options.page
            })
        );
    }

    getIssuesPerRepo(
        repositoryFullName: string,
        options: ILoadOptions
    ): Observable<GenericResponseModel<SearchResult>> {
        return this.octokitGeneralService.convertToObservable(
            this.octokitGeneralService.rest().search.issuesAndPullRequests({
                q: `repo:${repositoryFullName} is:open`,
                order: 'desc',
                sort: 'comments',
                per_page: options.per_page,
                page: options.page
            })
        );
    }
}
