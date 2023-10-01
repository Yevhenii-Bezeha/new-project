import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberFormat',
    standalone: true
})
export class NumberFormatPipe implements PipeTransform {
    transform(value: number | undefined): string {
        if (!value) {
            return '';
        }

        if (value >= 1000) {
            const roundedValue = Math.round(value / 100) / 10; // Round to one decimal place

            return `${roundedValue}k`;
        }

        return value.toString();
    }
}
