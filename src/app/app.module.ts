import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import { AuthService } from './shared/services/auth/auth.service';
import { AppInitService } from './shared/services/app-init/app-init.service';

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
    HttpClientModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
      { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService], multi: true},
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
