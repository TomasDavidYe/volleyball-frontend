import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login'
import { Http } from '@angular/http';
import { FacebookService, InitParams } from 'ngx-facebook'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private fb: FacebookService) {
        let initParams: InitParams = {
            appId: '2430547176960961',
            xfbml: true,
            version: 'v3.1'
        }
        fb.init(initParams)
     }

    ngOnInit() {
        
    }

    sendToRestApiMethod(token: string): void {
    }

}
