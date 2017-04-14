import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

@Injectable()
export class Appservices {
    constructor(private _http: Http) {

    }
    getPosts() {
        return this._http.get("https://api.github.com/users")
            .map(res => res.json())
            .take(2)

    }
    getUser(userLogin: string) {
        return this._http.get("https://api.github.com/users/" + userLogin)
            .map(res => res.json())

    }

    getSpecificUser(id: number) {
        return this._http.get("https://api.github.com/users/" + id)
            .map(res => res.json());
    }
}