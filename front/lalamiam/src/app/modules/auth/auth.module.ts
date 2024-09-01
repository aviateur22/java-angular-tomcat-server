import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { authRouting } from './routes/auth.routing';
import { reducers as authReducer } from './store/auth-store/reducer';
import { AuthEffect } from './store/auth-store/effect';
import { AuthService } from './services/auth.service';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ShowOnFocusDirective } from './directives/show-on-focus.directive';
import { SkeletonModule } from 'primeng/skeleton';
import { AccountActivationPageComponent } from './pages/account-activation-page/account-activation-page.component';
import { ChangeAccountPasswordPageComponent } from './pages/change-account-password-page/change-account-password-page.component';
import { LostPasswordMailingPageComponent } from './pages/lost-password-mailing-page/lost-password-mailing-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ShowOnFocusDirective,
    AccountActivationPageComponent,
    ChangeAccountPasswordPageComponent,
    LostPasswordMailingPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRouting),
    StoreModule.forFeature('authState', authReducer),
    EffectsModule.forFeature([
      AuthEffect
    ]),
    InputTextModule,
    PasswordModule,
    MessagesModule,
    ButtonModule,
    MessageModule,
    DividerModule,
    SkeletonModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
