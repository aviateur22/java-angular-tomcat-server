//@ts-nocheck
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as AuthAction from '../../store/auth-store/action'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { Message } from 'primeng/api';

import { RegisterDto } from '../../models/register.dto';
import { Captcha } from '../../models/captcha.model';
import {  captchaSelector } from '../../store/auth-store/selector';
import { passwordValidator } from '../../validators/password.validator';
import { environment } from 'src/environments/environment';
import appMessage from 'src/app/utils/messages/register-page-message';
import { MessageUtil } from 'src/app/utils/messages/message-utils';
import { CaptchaClientResponseDto } from '../../models/captcha-client-response.dto';
import { AuthService } from '../../services/auth.service';
import ComponentBaseApp from 'src/app/component.base';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent extends ComponentBaseApp {

  registerDataFormGroup: FormGroup = new FormGroup({});

  /**
   * Données pour le captcha
   */
  captcha$: Observable<Captcha|null>;

  constructor(private _fb: FormBuilder, private _store: Store<AppState>, private _authService: AuthService){
    super(appMessage.registerPage);
    this.captcha$ = _store.pipe(select(captchaSelector));
  }

  ngOnInit() {
    this.initializeRegisterData();
    this.initializeForm();
  }

  ngOnDestroy() {
    this._store.dispatch(AuthAction.leaveRegisterPage());
    localStorage.removeItem('captcha');
  }

  /**
   * Formgroup Init
   */
  initializeRegisterData() {
    this.registerDataFormGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      name : ['', Validators.required],
      captchaClientResponse: ['', Validators.required]
    }, {
      validators: passwordValidator()
    })
  }

  /**
   * CSRF + Captcha
   */
  initializeForm() {
    this._store.dispatch(AuthAction.captcha());
    this._store.dispatch(AuthAction.csrf());
  }

  register() {
    if (!this.registerDataFormGroup.valid) {
      return this.registerDataFormGroup.markAllAsTouched();
    }

    const email: string = this.registerDataFormGroup.get('email')?.value;
    const password : string = this.registerDataFormGroup.get('password')?.value;
    const name: string = this.registerDataFormGroup.get('name')?.value;
    const captchaClientResponse: string = this.registerDataFormGroup.get('captchaClientResponse')?.value

    const registerData: RegisterDto = this._authService.getRegisterDto(email, password, name, captchaClientResponse);

    this._store.dispatch(AuthAction.register(registerData));

  }

}
