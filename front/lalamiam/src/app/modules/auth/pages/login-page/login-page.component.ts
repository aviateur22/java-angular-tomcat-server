import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as AuthAction from '../../store/auth-store/action'
import { Observable } from 'rxjs';
import { AppState } from 'src/store/app.state';

import { LoginDto } from '../../models/login.dto';
import { isLoadingSelector } from '../../store/auth-store/selector';
import { environment } from 'src/environments/environment';
import frontendLinkUrl from 'src/app/utils/frontend-link-url';
import ComponentBase from 'src/app/component.base';
import appMessage from 'src/app/utils/messages/login-page-message';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent extends ComponentBase {

  loginDataFormGroup: FormGroup = new FormGroup({});
  isLoading$: Observable<boolean>;

  /**
   * Path pour afficher la web_app
   */
  webappPath: string = environment.webapp_path;

  /**
   * Link page inscription
   */
  registerLink!: string;

  /**
   * Link reset mot de passe
   */
  resetPasswordLink!: string;

  constructor(private _fb: FormBuilder, private _store: Store<AppState>) {
    super(appMessage.loginPage);
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));

  }

  ngOnInit() {
    this.registerLink =  `/${this.webappPath}/${frontendLinkUrl.register.url}`;
    this.resetPasswordLink = `/${this.webappPath}/${frontendLinkUrl.lostPasswordMailingPage.url}`;

    this._store.dispatch(AuthAction.csrf());
    this.initializeLoginData();
  }

  /**
   * Initialisation FormBuilder
   */
  initializeLoginData() {
    this.loginDataFormGroup = this._fb.group({
      // Email
      email: ['', Validators.required],

      // Password
      password: ['', Validators.required]
    })
  }

  /**
   * Login
   * @returns
   */
  login() {

    if (!this.loginDataFormGroup.valid) {
      return this.loginDataFormGroup.markAllAsTouched();
    }

    const logindata: LoginDto = {
      email: this.loginDataFormGroup.get('email')?.value,
      password:  this.loginDataFormGroup.get('password')?.value,
      language: environment.language
    }

    this._store.dispatch(AuthAction.login(logindata));

  }

}
