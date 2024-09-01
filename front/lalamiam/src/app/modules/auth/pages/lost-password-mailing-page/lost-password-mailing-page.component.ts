import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ComponentBase from 'src/app/component.base';
import messageData from 'src/app/utils/messages/lost-password-mailing-message';
import { LostPaswordMailingDto } from '../../models/lost-password-mailing.dto';
import { environment } from 'src/environments/environment';
import { AppState } from 'src/store/app.state';
import { Store } from '@ngrx/store';
import * as AuthAction from '../../store/auth-store/action'

@Component({
  selector: 'app-lost-password-mailing-page',
  templateUrl: './lost-password-mailing-page.component.html',
  styleUrls: ['./lost-password-mailing-page.component.css']
})
export class LostPasswordMailingPageComponent extends ComponentBase {

  lostPasswordFG: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder, private _store: Store<AppState>) {
    // Charegement des messages de la page
    super(messageData.lostPasswordMailingPage);
  }

  ngOnInit() {
    this.initialiazeFormData();
  }

  initialiazeFormData() {
    this.lostPasswordFG = this._fb.group({
      email: ['', Validators.required]
    });
  }

  passwordLinkReinitializer(){
    if (!this.lostPasswordFG.valid) {
      return this.lostPasswordFG.markAllAsTouched();
    }

    const lostPasswordMailingDto: LostPaswordMailingDto = {
      email: this.lostPasswordFG.get('email')?.value,
      language: environment.language
    }

    this._store.dispatch(AuthAction.lostPasswordMailing(lostPasswordMailingDto));

  }

}
