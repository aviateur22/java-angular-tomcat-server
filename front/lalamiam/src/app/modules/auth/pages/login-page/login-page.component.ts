import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as AuthAction from '../../store/auth-store/action'
import { Observable } from 'rxjs';
import { AppState } from 'src/store/app.state';

import { LoginDto } from './../../models/login-dto.model';
import { isLoadingSelector } from '../../store/auth-store/selector';
import { MessageUtil } from 'src/app/utils/messages/message-utils';
import { environment } from 'src/environments/environment';
import loginPageMessage from 'src/app/utils/messages/login-page-message';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginDataFormGroup: FormGroup = new FormGroup({});
  isLoading$: Observable<boolean>;

  /**
   * Erreurs formulaire
   */
  errorMessages: Map<string, string> = new Map();

  /**
   * Info sur champs du formulaire   *
   */
  formInput: Map<string, string> = new Map();

  constructor(private _fb: FormBuilder, private _store: Store<AppState>) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));

  }

  ngOnInit() {
    this.initializeLoginData();
    this.initializeFormMessages();
  }

  initializeLoginData() {
    this.loginDataFormGroup = this._fb.group({
      // Email
      email: ['', Validators.required],

      // Password
      password: ['', Validators.required]
    })
  }

  initializeFormMessages() {
    /**
     * chargement des infos du formulaire
     */
    this.formInput = MessageUtil.loadMessageInMap(loginPageMessage.loginPage.information, environment.language)

      /**
       * Chargement des messages d'erreur
       */
      this.errorMessages = MessageUtil.loadMessageInMap(loginPageMessage.loginPage.error, environment.language);

    }

  login() {

    if (!this.loginDataFormGroup.valid) {
      return this.loginDataFormGroup.markAllAsTouched();
    }
    const logindata = new LoginDto(
      this.loginDataFormGroup.get('email')?.value,
      this.loginDataFormGroup.get('password')?.value
    );
    console.log(logindata);
    this._store.dispatch(AuthAction.login(logindata));
    console.log("res.email, res.jwt");
    // this._authService.login(logindata).subscribe(res=>{
    //   console.log(res.email, res.jwt);
    // });
  }

}
