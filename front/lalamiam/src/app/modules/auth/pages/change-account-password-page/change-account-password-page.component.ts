import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ComponentBaseApp from 'src/app/component.base';
import appMessage from 'src/app/utils/messages/change-password-message'
import { passwordValidator } from '../../validators/password.validator';
import { AppState } from 'src/store/app.state';
import { select, Store } from '@ngrx/store';
import * as AuthAction from '../../store/auth-store/action'
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import frontendLinkUrl from 'src/app/utils/frontend-link-url';
import { ChangePasswordDto } from '../../models/auth.dto';
import { Observable } from 'rxjs';
import { ChangeAccountPassword } from '../../models/change-account-password.model';
import { changeAccountPasswordSelector } from '../../store/auth-store/selector';

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

  changeAccountPassword$: Observable<ChangeAccountPassword|null>


  constructor(
    private _fb: FormBuilder,
    private _store: Store<AppState>,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    super(appMessage.changePassword);
    this.changeAccountPassword$ = this._store.pipe(select(changeAccountPasswordSelector));

  }

  ngOnInit() {
    // chargement token csrf
    this._store.dispatch(AuthAction.csrf());

    // Initialisation FG
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
      confirmPassword: ['', Validators.required],
      char1: ['', [Validators.required, Validators.maxLength(1)]],
      char2: ['', [Validators.required, Validators.maxLength(1)]],
      char3: ['', [Validators.required, Validators.maxLength(1)]],
      char4: ['', [Validators.required, Validators.maxLength(1)]],
      char5: ['', [Validators.required, Validators.maxLength(1)]],
    }, {
      Validators: passwordValidator
    })
  }

  /**
   * Renvoie le token
   */
  getToken(): string {
    const value = this.changePasswordFG.value;
    return `${value.char1}${value.char2}${value.char3}${value.char4}${value.char5}`;
  }

  /**
   * Changement de cellule
   * @param event
   * @param nextInput
   */
  onInputChange(event: Event, nextInput: HTMLInputElement): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1) {
      nextInput.focus();
    }
    // Mise a jour de la valeur du token
    this.changePasswordFG.controls['changePasswordToken'].setValue(this.getToken());
  }

  /**
   * Changement mot de passe
   * @returns void
   */
  updatePassword(): void {

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
