import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { catchError, EMPTY, finalize, map, Observable, startWith } from 'rxjs';
import { AuthService, ErrorService, HttpStatusCode, OctokitGeneralService, RoutesEnum } from 'shared-core';

interface IAddPersonalKeyForm {
    input: FormControl<string>;
}
@Component({
    selector: 'lib-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatProgressSpinnerModule,
        NgIf,
        AsyncPipe,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export default class AuthComponent {
    isLoading: WritableSignal<boolean> = signal(false);
    form: FormGroup<IAddPersonalKeyForm>;
    disabled$: Observable<boolean>;

    private destroyRef: DestroyRef = inject(DestroyRef);

    constructor(
        private octokitGeneralService: OctokitGeneralService,
        private authService: AuthService,
        private fb: NonNullableFormBuilder,
        private router: Router,
        private errorService: ErrorService
    ) {
        this.form = this.fb.group({
            input: this.fb.control('', Validators.required)
        });
        this.disabled$ = this.form.statusChanges.pipe(
            startWith(this.form.status),
            map(status => status !== 'VALID')
        );
    }

    submit(): void {
        this.isLoading.set(true);

        this.octokitGeneralService
            .auth(this.form.controls.input.value)
            .pipe(
                finalize(() => this.isLoading.set(false)),
                catchError(result => {
                    this.errorService.setError(result.message);
                    this.form.controls.input.reset();
                    this.authService.setLoggedIn(false);

                    return EMPTY;
                }),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe(result => {
                if (result.status !== HttpStatusCode.Ok) {
                    return;
                }

                void this.successAuthActions();
            });
    }

    clear(): void {
        this.form.controls.input.reset();
    }

    private async successAuthActions(): Promise<void> {
        await this.router.navigate([RoutesEnum.Home]);
        this.authService.setLoggedIn(true);
    }
}
