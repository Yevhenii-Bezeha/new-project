import { Injectable } from '@angular/core';
import { RestEndpointMethods } from '@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types';
import { Octokit } from 'octokit';
import { from, Observable, defer } from 'rxjs';

import { GenericResponseModel } from '../../models/generic-response.model';

@Injectable({
    providedIn: 'root'
})
export class OctokitGeneralService {
    private OCTOKIT_CONNECTION!: Octokit;

    auth(key: string): Observable<GenericResponseModel<unknown>> {
        this.OCTOKIT_CONNECTION = new Octokit({
            auth: key
        });

        return this.convertToObservable(
            this.OCTOKIT_CONNECTION.rest.users.getAuthenticated()
        );
    }

    convertToObservable<T>(promise: Promise<T>): Observable<T> {
        return defer(() => from(promise));
    }

    rest(): RestEndpointMethods {
    // TODO: Fix once rest supports copilot, due to @octokit/plugin-rest-endpoint-methods change
        return this.OCTOKIT_CONNECTION.rest as unknown as RestEndpointMethods;
    }
}
