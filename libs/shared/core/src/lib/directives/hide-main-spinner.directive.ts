import { AfterViewInit, Directive, Renderer2 } from '@angular/core';

@Directive({
    selector: '[hideSpinner]',
    standalone: true
})
export class HideMainSpinnerDirective implements AfterViewInit {
    constructor(private readonly _renderer: Renderer2) {}

    ngAfterViewInit(): void {
        const lMainSpinnerElement = this._renderer.selectRootElement('.spinner');

        if (lMainSpinnerElement) {
            this._renderer.removeChild(lMainSpinnerElement.parentNode, lMainSpinnerElement);
        }
    }
}
