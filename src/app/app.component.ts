import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import type { OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { ErrorService, HideMainSpinnerDirective, StyleLoaderService } from 'shared-core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterModule,
        AsyncPipe,
        NgIf,
        HeaderComponent,
        MatSnackBarModule,
        FooterComponent,
        HideMainSpinnerDirective
    ]
})
export class AppComponent implements OnInit {
    private destroyRef: DestroyRef = inject(DestroyRef);
    constructor(
        private errorService: ErrorService,
        private snackBar: MatSnackBar,
        private styleLoaderService: StyleLoaderService
    ) {}

    ngOnInit() {
        this.styleLoaderService.load('styles.css');
        this.styleLoaderService.load('purple-green.css');

        this.errorService.error$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(message => {
            this.snackBar.open(message, 'Close', {
                duration: 5000,
                announcementMessage: message,
                horizontalPosition: 'end',
                verticalPosition: 'top'
            });
        });
    }
}
