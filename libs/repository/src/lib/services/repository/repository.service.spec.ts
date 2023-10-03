import { TestBed } from '@angular/core/testing';
import { OctokitGeneralService } from 'shared-core';

import { RepositoryService } from './repository.service';

jest.mock('../../../../../shared/core/src/lib/services/octokit-general/octokit-general.service');

describe('RepositoryService', () => {
    let service: RepositoryService;
    let octokitGeneralServiceMock: jest.Mocked<OctokitGeneralService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: OctokitGeneralService, useFactory: OctokitGeneralService }]
        });
        octokitGeneralServiceMock = TestBed.inject(OctokitGeneralService) as jest.Mocked<OctokitGeneralService>;
        service = TestBed.inject(RepositoryService);
    });

    it('should get repositories list', () => {
        service.getRepositoriesList({ per_page: 30, page: 1 });

        expect(octokitGeneralServiceMock.rest).toHaveBeenCalledWith();
        // eslint-disable-next-line jest/prefer-called-with
        expect(octokitGeneralServiceMock.convertToObservable).toHaveBeenCalled();
    });

    it('should get issues for repo', () => {
        service.getIssuesPerRepo('mock', { per_page: 30, page: 1 });

        expect(octokitGeneralServiceMock.rest).toHaveBeenCalledWith();
        // eslint-disable-next-line jest/prefer-called-with
        expect(octokitGeneralServiceMock.convertToObservable).toHaveBeenCalled();
    });
});
