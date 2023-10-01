import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn: WritableSignal<boolean> = signal(false);

    setLoggedIn(value: boolean): void {
        this.loggedIn.set(value);
    }

    isLoggedIn(): boolean {
        return this.loggedIn();
    }
}
