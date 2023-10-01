import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { RoutesEnum } from 'shared-core';

@Component({
    selector: 'lib-card-actions',
    standalone: true,
    templateUrl: './card-actions.component.html',
    styleUrls: ['./card-actions.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, RouterLink, NgIf]
})
export class CardActionsComponent {
    @Input({ required: true }) isIssuesRoute!: boolean;
    routes: typeof RoutesEnum = RoutesEnum;
}
