/* eslint-disable @angular-eslint/directive-selector */
import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';

/**
 * This is a utility directive for use with end-to-end (e2e) tests.
 * It should be used to place e2e identifiers on elements in the app for to drive the e2e tests.
 *
 * The e2e directive added to elements should follow the pattern: "Where-What-Type" OR "Where-What-Type@ID"
 *
 * For example: `SiteMaintenance-Close-Button`, `TestCut-InProgress-H1`, etc.
 *
 * If a tag needs to be built dynamically you can use attr binding.
 * The value following the @ symbol will have all special characters removed, and also be converted to uppercase.
 *
 * ~~~html
 * <div e2e
 *    [attr.e2e]="'BasicShapes-Item-Div@' + shape?.imageName"
 *    ...
 * </div>
 * ~~~
 *
 * When passing the watch flag, the directive will watch for changes to the e2e attribute and update the __e2e__ attribute accordingly.
 * This is most often needed when using the directive on an element which does not deconstruct when the e2e value changes (such as the cdk-virtual-for)
 * it should be used like this:
 *
 * ~~~html
 *  [e2e]="'FontPicker-FontListItem-Div@' + font.fontFamilyName"
 [e2eWatch]="true"
 * ~~~
 */
@Directive({
    selector: '[e2e]',
    standalone: true
})
export class E2EDirective implements AfterViewInit {
    @Input() e2e!: string;

    constructor(
        private readonly _elementRef: ElementRef<HTMLElement>,
        private readonly _changeRef: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        const E2EValue = this._elementRef.nativeElement.getAttribute('e2e');

        this._elementRef.nativeElement.removeAttribute('e2e');

        if (E2EValue) {
            setTimeout(() => {
                this._parseAndFormatE2EAttribute(E2EValue);
            }, 0);
        }
    }

    private _parseAndFormatE2EAttribute(inE2EValue: string): void {
        if (inE2EValue) {
            const lValueParts = /^([a-zA-Z0-9_]+)-(.+)-([a-zA-Z0-9_]+)(@(.+))?$/.exec(inE2EValue);

            if (!lValueParts || lValueParts.length !== 6) {
                throw new Error(`Invalid E2E Tag '${inE2EValue}'`);
            }

            const lKey = `${lValueParts[1]}-${lValueParts[2]}-${lValueParts[3]}`;
            const lID = lValueParts[5] && lValueParts[5].replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
            const lValue = lKey + (lID ? `@${lID}` : '');

            this._elementRef.nativeElement.setAttribute('__e2e__', lValue);
        }
    }
}
