import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lib-users-list',
    standalone: true,
    template: './users-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: []
})
export class UsersListComponent {
}
