import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { OctokitGeneralService } from './octokit-general.service';

describe('OctokitGeneralService', () => {
    let service: OctokitGeneralService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [OctokitGeneralService]
        });
        service = TestBed.inject(OctokitGeneralService);
    });

    it('should return observable when calling convertToObservable', () => {
        const promise = Promise.resolve('test-data');

        const result = service.convertToObservable(promise);

        expect(result).toBeInstanceOf(Observable);
    });
});
