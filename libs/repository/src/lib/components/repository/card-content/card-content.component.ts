import { DatePipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NumberFormatPipe } from 'shared-core';

import { IRepository } from '../../../models/repository';

@Component({
    selector: 'lib-card-content',
    standalone: true,
    templateUrl: './card-content.component.html',
    styleUrls: ['./card-content.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatListModule, NumberFormatPipe, DatePipe, NgIf]

})
export class CardContentComponent {
    @Input({ required: true }) repository!: IRepository;
}
