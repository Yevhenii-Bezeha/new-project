import { EMPTY } from 'rxjs';

export const OctokitGeneralService = jest.fn().mockImplementation(() => {
    return {
        auth: jest.fn().mockReturnValue(EMPTY),
        convertToObservable: jest.fn().mockReturnValue(EMPTY),
        rest: jest.fn()
    };
});
