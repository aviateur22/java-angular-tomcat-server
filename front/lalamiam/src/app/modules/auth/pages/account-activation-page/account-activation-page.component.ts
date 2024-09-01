import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import frontendLinkUrl from 'src/app/utils/frontend-link-url';
import { environment } from 'src/environments/environment';
import { ActivateAccountDto } from '../../models/activate-account.dto';
import { select, Store } from '@ngrx/store';
import * as AuthAction from '../../store/auth-store/action'
import { Observable } from 'rxjs';
import { ActivateAccountResponse, ActivatedAccountStatus } from '../../models/activate-account.model';
import { activateAccountResponseSelector } from '../../store/auth-store/selector';
import { AppState } from 'src/store/app.state';
import appMessage from 'src/app/utils/messages/account-page-message';
import ComponentBaseApp from 'src/app/component.base';

@Component({
  selector: 'app-account-activation-page',
  templateUrl: './account-activation-page.component.html',
  styleUrls: ['./account-activation-page.component.css']
})
export class AccountActivationPageComponent extends ComponentBaseApp {

  activatedAccountResponse$: Observable<ActivateAccountResponse|null>;

  // Statut de l'activation possible
  activateAccountStatusSuccess: ActivatedAccountStatus = ActivatedAccountStatus.SUCCESS;
  activateAccountStatusFailure: ActivatedAccountStatus = ActivatedAccountStatus.FAILURE;

  // Données de URL
  activationToken: string | null = '';
  userEmail: string | null = '';

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _store: Store<AppState>) {
    super(appMessage.accountActivationPage);
    this.activatedAccountResponse$ = this._store.pipe(select(activateAccountResponseSelector));
  }

  ngOnInit() {
    this.userEmail = this._activatedRoute.snapshot.paramMap.get('user-email');
    this.activationToken = this._activatedRoute.snapshot.paramMap.get('confirmation-token');

    if(this.userEmail === null || this.userEmail.trim() === '' || this.activationToken === null || this.activationToken.trim() === '') {
      this._router.navigate([`${environment.webapp_path}/${frontendLinkUrl.error.url}`]);
    }

    this.activateAccount();
  }

  /**
   * Activation du compte
   */
  activateAccount(){
    const activateAccountDto: ActivateAccountDto = {
      language: environment.api_base,
      token: this.activationToken!,
      email: this.userEmail!
    }

    this._store.dispatch(AuthAction.activateAccount(activateAccountDto))
  }
}
