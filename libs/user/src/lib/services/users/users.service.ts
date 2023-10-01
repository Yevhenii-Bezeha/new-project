import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    GenericResponseModel,
    ILoadOptions,
    OctokitGeneralService,
    SearchResult
} from 'shared-core';

import { IUserDetails } from '../../models/user-details';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private octokitGeneralService: OctokitGeneralService) {}

    getUsersList(
        options: ILoadOptions
    ): Observable<GenericResponseModel<SearchResult>> {
        return this.octokitGeneralService.convertToObservable(
            this.octokitGeneralService.rest().search.users({
                order: 'asc',
                sort: 'followers',
                q: 'followers:>=10',
                per_page: options.per_page,
                page: options.page
            })
        );
    }

    getUserDetails(
        userName: string
    ): Observable<GenericResponseModel<IUserDetails>> {
        return this.octokitGeneralService.convertToObservable(
            this.octokitGeneralService.rest().users.getByUsername({
                username: userName
            })
        ) as Observable<GenericResponseModel<IUserDetails>>;
    }
}
