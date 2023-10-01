import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'gitUrlConverter',
    standalone: true
})
export class GitUrlConverterPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        if (value.startsWith('git://')) {
            return value.replace('git://', 'https://');
        }

        return value;
    }
}
