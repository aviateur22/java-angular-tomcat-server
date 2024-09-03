import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ComponentBaseApp from 'src/app/component.base';
import appMessage from 'src/app/utils/messages/change-password-message'
import { passwordValidator } from '../../validators/password.validator';
import { AppState } from 'src/store/app.state';
import { Store } from '@ngrx/store';
import * as AuthAction from '../../store/auth-store/action'
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import frontendLinkUrl from 'src/app/utils/frontend-link-url';
import { ChangePasswordDto } from '../../models/auth.dto';

@Component({
  selector: 'app-change-account-password-page',
  templateUrl: './change-account-password-page.component.html',
  styleUrls: ['./change-account-password-page.component.css']
})
export class ChangeAccountPasswordPageComponent extends ComponentBaseApp {

  changePasswordFG: FormGroup = new FormGroup({});

   // Données de URL
   urlToken: string | null = '';
   userEmail: string | null = '';


  constructor(
    private _fb: FormBuilder,
    private _store: Store<AppState>,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    super(appMessage.changePassword);
  }

  ngOnInit() {
    this.initFormGroup();

    this.userEmail = this._activatedRoute.snapshot.paramMap.get('user-email');
    this.urlToken = this._activatedRoute.snapshot.paramMap.get('confirmation-token');

    if(this.userEmail === null || this.userEmail.trim() === '' || this.urlToken === null || this.urlToken.trim() === '') {
      this._router.navigate([`${environment.webapp_path}/${frontendLinkUrl.error.url}`]);
    }
  }

  /**
   * Initialisation FormGroip
   */
  initFormGroup() {
    this.changePasswordFG = this._fb.group({
      changePasswordToken: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      Validators: passwordValidator
    })
  }

  updatePassword() {
    if (!this.changePasswordFG.valid) {
      return this.changePasswordFG.markAllAsTouched();
    }

    const changePasswordDto: ChangePasswordDto = {
      email: this.userEmail!,
      password:  this.changePasswordFG.get('password')?.value,
      urlToken: this.urlToken!,
      changePasswordToken: this.changePasswordFG.get('password')?.value,
      language: environment.language
    }

    this._store.dispatch(AuthAction.changePassword(changePasswordDto))
  }

}
