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



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRouting),
    StoreModule.forFeature('authState', authReducer),
    EffectsModule.forFeature([
      AuthEffect
    ])
  ],
  providers: [AuthService]
})
export class AuthModule { }
