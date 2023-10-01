import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesEnum } from 'shared-core';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, RouterLink, RouterLinkActive]
})
export class HeaderComponent {
    routes: typeof RoutesEnum = RoutesEnum;
    constructor(private router: Router) {}

    async goToAuth(): Promise<void> {
        await this.router.navigate([RoutesEnum.Auth]);
    }
}
