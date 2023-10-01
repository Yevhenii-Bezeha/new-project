import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import type { OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize, map, Observable } from 'rxjs';
import { ErrorService, RoutesEnum } from 'shared-core';

import { IUserDetails } from '../../models/user-details';
import { UsersService } from '../../services/users/users.service';

@Component({
    selector: 'lib-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatListModule, MatProgressSpinnerModule, MatButtonModule, RouterLink, NgIf, AsyncPipe, NgOptimizedImage]
})
export class UserComponent implements OnInit {
    routes: typeof RoutesEnum = RoutesEnum;
    isLoading: WritableSignal<boolean> = signal(false);
    usersDetails$!: Observable<IUserDetails | null>;

    private destroyRef: DestroyRef = inject(DestroyRef);

    constructor(
        private route: ActivatedRoute,
        private usersService: UsersService,
        private errorService: ErrorService
    ) {}

    ngOnInit() {
        this.errorService.setError('Sorry, this section is under development currently. Please try to visit it later');

        this.isLoading.set(true);

        const { userLogin } = this.route.snapshot.params;

        this.usersDetails$ = this.usersService.getUserDetails(userLogin).pipe(
            map(result => result.data ?? null),
            finalize(() => this.isLoading.set(false)),
            takeUntilDestroyed(this.destroyRef)
        );
    }
}
