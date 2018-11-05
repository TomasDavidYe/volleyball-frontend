import { AuthServiceConfig, FacebookLoginProvider } from 'angular-6-social-login';

export function getAuthServiceConfigs(){
    let config = new AuthServiceConfig([
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("2430547176960961")
        }
    ]);
    return config;
}