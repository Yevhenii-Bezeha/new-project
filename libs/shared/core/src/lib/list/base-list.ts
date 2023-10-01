import { DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, finalize, map, Observable } from 'rxjs';

import { GenericResponseModel, SearchResult } from '../models';
import { ErrorService } from '../services';

export class BaseList {
    isLoading: WritableSignal<boolean> = signal(false);
    pageIndex: number = 0;
    pageSize: number = 30;
    response!: SearchResult | null;

    private destroyRef: DestroyRef = inject(DestroyRef);

    constructor(protected router: Router, protected route: ActivatedRoute, protected errorService: ErrorService) {
        const { pageSize } = this.route.snapshot.params;
        const { pageIndex } = this.route.snapshot.params;

        if (pageSize && pageIndex) {
            this.pageSize = pageSize;
            this.pageIndex = pageIndex;
        }
    }

    fetchData(observable: Observable<GenericResponseModel<SearchResult>>): void {
        this.isLoading.set(true);

        observable
            .pipe(
                map(result => result.data ?? null),
                catchError(result => {
                    this.errorService.setError(result.message);

                    return EMPTY;
                }),
                finalize(() => this.isLoading.set(false)),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe(result => {
                this.response = result;
            });
    }

    async generalOnPageEvent(pageEvent: PageEvent): Promise<void> {
        this.pageSize = pageEvent.pageSize;
        this.pageIndex = pageEvent.pageIndex;

        const queryParams = { ...this.route.snapshot.queryParams };

        // queryParams.pageSize = pageEvent.pageSize;
        // queryParams.pageIndex = pageEvent.pageIndex;

        await this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            queryParamsHandling: 'merge'
        });
    }
}
