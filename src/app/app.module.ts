import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/** services */
import { AuthService } from './shared/services/auth/auth.service';
import { AppInitService } from './shared/services/app-init/app-init.service';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { SharedComponentsModule } from './shared/components/shared-components.module';


/**
 * 
 * @param appInitService  is an instance of the service where the promise need to be rresolved.
 */

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.Init();
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SharedComponentsModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
      { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService], multi: true},
      AuthService,
      ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
