import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import type { OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService, RoutesEnum } from 'shared-core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, NgIf]
})
export default class HomeComponent implements OnInit {
    loggedIn: WritableSignal<boolean> = signal(false);
    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.loggedIn.set(this.authService.isLoggedIn());
    }

    async goToLogin(): Promise<void> {
        await this.router.navigate([RoutesEnum.Auth]);
    }

    async goToRepos(): Promise<void> {
        await this.router.navigate([RoutesEnum.Repositories]);
    }
}
