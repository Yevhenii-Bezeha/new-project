import { GitUrlConverterPipe } from './git-url-converter.pipe';

describe('GitUrlConverterPipe', () => {
    let pipe: GitUrlConverterPipe;

    beforeEach(() => {
        pipe = new GitUrlConverterPipe();
    });

    it('should transform "git://" to "https://"', () => {
        const input = 'git://github.com/jwasham/coding-interview-university.git';
        const transformed = pipe.transform(input);

        expect(transformed).toBe('https://github.com/jwasham/coding-interview-university.git');
    });

    it('should not transform other URLs', () => {
        const input = 'https://github.com/jwasham/coding-interview-university.git';
        const transformed = pipe.transform(input);

        expect(transformed).toStrictEqual(input);
    });
});
