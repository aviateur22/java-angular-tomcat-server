import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginDto } from './../../models/login-dto.model';
import { AppState } from 'src/store/app.state';
import { errorMessageSelector, isErrorVisibleSelector, isLoadingSelector } from '../../store/auth-store/selector';
import * as AuthAction from '../../store/auth-store/action'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginDataFormGroup: FormGroup = new FormGroup({});
  isLoading$: Observable<boolean>;

  constructor(private _fb: FormBuilder, private _store: Store<AppState>) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));

  }

  ngOnInit() {
    this.initializeLoginData()
  }

  initializeLoginData() {
    this.loginDataFormGroup = this._fb.group({
      // Email
      email: ['', Validators.required],

      // Password
      password: ['', Validators.required]
    })
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
