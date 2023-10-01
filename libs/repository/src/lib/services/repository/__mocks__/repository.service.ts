import { EMPTY } from 'rxjs';

export const RepositoryService = jest.fn().mockImplementation(() => {
    return {
        getRepositoryDetails: jest.fn().mockReturnValue({}),
        setRepositoryDetails: jest.fn(),
        getRepositoriesList: jest.fn().mockReturnValue(EMPTY),
        getIssuesPerRepo: jest.fn().mockReturnValue(EMPTY)
    };
});
