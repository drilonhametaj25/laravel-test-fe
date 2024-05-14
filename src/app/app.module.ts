import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorModule } from './components/error/error.module';
import { LayoutWrapperModule } from './components/layout-wrapper/layout-wrapper.module';
import { ProgressSpinnerModule } from './components/progress-spinner/progress-spinner.module';
import { AuthInterceptor } from './interceptors/auth/auth-interceptor';
import { AUTH_INTERCEPTOR_OPTIONS } from './interceptors/auth/auth-interceptor-options';
import { ClientErrorHandler } from './interceptors/auth/client-error-handler';
import { LoginModule } from './routes/login/login.module';
import { PrivateModule } from './routes/private/private.module';
import { PublicModule } from './routes/public/public.module';
import { CustomSnackbarModule } from './components/custom-snackbar/custom-snackbar.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutWrapperModule,
    ProgressSpinnerModule,
    PublicModule,
    PrivateModule,
    LoginModule,
    CustomSnackbarModule,
    ErrorModule,
    AppLayoutModule,
    SharedModule,
    ButtonModule,
  ],
  providers: [
    HttpClient,
    { provide: ErrorHandler, useClass: ClientErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: AUTH_INTERCEPTOR_OPTIONS,
      useValue: {
        whitelist: [new RegExp('.+/api/.+')],
        blacklist: [],
      },
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
