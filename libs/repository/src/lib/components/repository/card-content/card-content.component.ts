import { DatePipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NumberFormatPipe } from 'shared-core';

import { IRepository } from '../../../models/repository';

@Component({
    selector: 'lib-card-content',
    standalone: true,
    templateUrl: './card-content.component.html',
    styleUrls: ['./card-content.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatListModule, NumberFormatPipe, DatePipe, NgIf, MatIconModule, MatTooltipModule]

})
export class CardContentComponent {
    @Input({ required: true }) repository!: IRepository;
}
