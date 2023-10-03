import { RestEndpointMethods } from '@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types';
import { EMPTY } from 'rxjs';

export const OctokitGeneralService = jest.fn().mockImplementation(() => {
    return {
        auth: jest.fn().mockReturnValue(EMPTY),
        convertToObservable: jest.fn().mockReturnValue(EMPTY),
        rest: jest.fn().mockReturnValue({
            search: {
                repos: jest.fn(),
                issuesAndPullRequests: jest.fn()
            }
        } as unknown as RestEndpointMethods)
    };
});
