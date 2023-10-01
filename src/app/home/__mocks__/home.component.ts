import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: []
})
export default class HomeComponent {}
