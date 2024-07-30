import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/store/app.state';
import { getEmailSelector } from 'src/store/user-ident-store/selector';
import * as Action from 'src/app/modules/auth/store/auth-store/action'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userEmail$: Observable<string>;

  constructor(private _store: Store<AppState>) {
    this.userEmail$ = this._store.pipe(select(getEmailSelector));

  }

  logout() {
    this._store.dispatch(Action.logout())
  }

}
