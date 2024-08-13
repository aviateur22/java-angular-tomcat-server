//@ts-nocheck
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as AuthAction from '../../store/auth-store/action'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { Message } from 'primeng/api';

import { RegisterDto } from './../../models/register-dto.model';
import { Captcha } from '../../models/captcha.model';
import {  captchaSelector } from '../../store/auth-store/selector';
import { passwordValidator } from '../../validators/password.validator';
import { environment } from 'src/environments/environment';
import appMessage from 'src/app/utils/messages/register-page-message';
import { MessageUtil } from 'src/app/utils/messages/message-utils';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  registerDataFormGroup: FormGroup = new FormGroup({});

  /**
   * Erreurs formulaire
   */
  errorMessages: Map<string, string> = new Map();

  /**
   * Info sur champs du formulaire   *
   */
  formInput: Map<string, string> = new Map();

  /**
   * Données pour le captcha
   */
  captcha$: Observable<Captcha|null>;

  constructor(private _fb: FormBuilder, private _store: Store<AppState>){
    this.captcha$ = _store.pipe(select(captchaSelector));
  }

  ngOnInit() {
    this.initializeFormMessages();
    this.initializeRegisterData();
    this.initializeForm();
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
      captchaResponse: ['', Validators.required]
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

  initializeFormMessages() {


  /**
   * chargement des infos du formulaire
   */
  this.formInput = MessageUtil.loadMessageInMap(appMessage.registerPage.information, environment.language)

    /**
     * Chargement des messages d'erreur
     */
    this.errorMessages = MessageUtil.loadMessageInMap(appMessage.registerPage.error, environment.language);

  }

  register() {
    if (!this.registerDataFormGroup.valid) {
      return this.registerDataFormGroup.markAllAsTouched();
    }
    const registerData = new RegisterDto(
      this.registerDataFormGroup.get('email')?.value,
      this.registerDataFormGroup.get('password')?.value,
      this.registerDataFormGroup.get('name')?.value
    );

    this._store.dispatch(AuthAction.register({
      email: registerData.email,
      password: registerData.password,
      name: registerData.name
    }));

  }

}
