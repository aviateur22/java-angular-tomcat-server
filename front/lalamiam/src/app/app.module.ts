import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from 'src/store/app.state';
import { UserEffect } from 'src/store/user-ident-store/effect';
import { FlashMessageEffect } from 'src/store/flash-message-store/effect';
import { HandlerHttpInterceptor } from './http.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AuthModule } from './modules/auth/auth.module';

import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    NotFoundPageComponent,
    UserPageComponent,
    FlashMessageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffect, FlashMessageEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), serialize: {
      replacer: (_key, value) => (typeof value === "bigint" ? value.toString() : value)
    }
  }),
  InputTextModule,
  MessageModule,
  TabMenuModule,
  ButtonModule,
  ConfirmDialogModule,
  CardModule,
  DividerModule

  ],
  providers: [
    ConfirmationService,
    {provide: HTTP_INTERCEPTORS, useClass:HandlerHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
