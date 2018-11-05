import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PlayersComponent } from './players/players.component';
import { MatchesComponent } from './matches/matches.component';
import { StatisticsComponent } from './statistics/statistics.component'
import { DataService } from './services/data-service';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angular-6-social-login'
import { getAuthServiceConfigs } from './social_login_config'
import { FacebookModule } from 'ngx-facebook'

registerLocaleData(en);

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'matches', component: MatchesComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/home' }
]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PlayersComponent,
        MatchesComponent,
        StatisticsComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgZorroAntdModule,
        SocialLoginModule,
        FacebookModule.forRoot()
    ],
    providers: [
        {
            provide: NZ_I18N,
            useValue: en_US
        },
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        },
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
