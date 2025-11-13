/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAuth0, AuthService } from '@auth0/auth0-angular';
import myAppConfig from './app/config/my-app-config';
import { ProductService } from './app/services/product';
import { AuthInterceptorService } from './app/services/auth-interceptor';


bootstrapApplication(App, {
  ...appConfig,

  providers: [
    provideAuth0({
      domain: myAppConfig.auth.domain,
      clientId: myAppConfig.auth.clientId,
      authorizationParams: {
        redirect_uri: myAppConfig.auth.authorizationParams.redirect_uri ?? window.location.origin,
      },
      httpInterceptor: { allowedList: myAppConfig.httpInterceptor.allowedList },
    }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    ProductService,

    ...(appConfig.providers || []),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));