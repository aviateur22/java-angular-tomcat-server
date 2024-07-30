import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from 'src/store/app.state';
import { UserEffect } from 'src/store/user-ident-store/effect';
import { FlashMessageEffect } from 'src/store/flash-message-store/effect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';
import { AuthModule } from './modules/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    NotFoundPageComponent,
    UserPageComponent,
    FlashMessageComponent
  ],
  imports: [
    BrowserModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
