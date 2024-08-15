import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/store/app.state';
import { messageSelector, isMessageErrorSelector } from 'src/store/flash-message-store/selector';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent {

  message$: Observable<string>;
  isErrorMessage$: Observable<boolean>

  constructor(private _store: Store<AppState>) {
    this.message$ = this._store.pipe(select(messageSelector));
    this.isErrorMessage$ = this._store.pipe(select(isMessageErrorSelector));

  }
}
