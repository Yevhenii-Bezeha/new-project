import { EMPTY } from 'rxjs';

export const UsersService = jest.fn().mockImplementation(() => {
    return {
        getUsersList: jest.fn().mockReturnValue(EMPTY),
        getUserDetails: jest.fn().mockReturnValue(EMPTY)
    };
});
