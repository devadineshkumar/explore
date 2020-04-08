import { RestDataSource } from './rest.datasource';
import { Injectable } from "@angular/core";
import { observable, Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {

    constructor(private restDataSource: RestDataSource) {

    }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.restDataSource.authenticate(username, password);
    }

    get authenticated(): boolean {
        return this.restDataSource.auth_token != null;
    }

    clear() {
        this.restDataSource.auth_token = null;
    }
}