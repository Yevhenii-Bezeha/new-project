import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import type { OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { ErrorService } from 'shared-core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule, AsyncPipe, NgIf, HeaderComponent, MatSnackBarModule, FooterComponent]
})
export class AppComponent implements OnInit {
    private destroyRef: DestroyRef = inject(DestroyRef);
    constructor(private errorService: ErrorService, private snackBar: MatSnackBar) {}

    ngOnInit() {
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
