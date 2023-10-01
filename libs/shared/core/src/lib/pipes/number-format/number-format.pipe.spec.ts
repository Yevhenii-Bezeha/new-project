import { NumberFormatPipe } from './number-format.pipe';

describe('NumberFormatPipe', () => {
    let pipe: NumberFormatPipe;

    beforeEach(() => {
        pipe = new NumberFormatPipe();
    });

    it('should not transform numbers less than 1000', () => {
        expect(pipe.transform(0)).toBe('');
        expect(pipe.transform(999)).toBe('999');
    });

    it('should transform numbers greater than or equal to 1000 to "k" format', () => {
        expect(pipe.transform(1000)).toBe('1k');
        expect(pipe.transform(1500)).toBe('1.5k');
        expect(pipe.transform(9999)).toBe('10k');
    });
});
