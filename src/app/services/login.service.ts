import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    accessKey: any;
    userCode: any;
    companyCode: any;
    email: any;

    constructor() { }
    setLogin(accessKey: any) {
        this.accessKey = accessKey;
        return this.accessKey;
    }
    getLogin() {
        return this.accessKey;
    }
    
}
