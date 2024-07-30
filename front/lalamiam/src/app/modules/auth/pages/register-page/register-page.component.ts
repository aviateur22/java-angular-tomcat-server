import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterDto } from './../../models/register-dto.model';
import { AppState } from 'src/store/app.state';
import * as AuthAction from '../../store/auth-store/action'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  registerDataFormGroup: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder, private _store: Store<AppState>){}

  ngOnInit() {
    this.initializeRegisterData()
  }

  initializeRegisterData() {
    this.registerDataFormGroup = this._fb.group({
      email: ['', Validators.required],

      password: ['', Validators.required],

      name : ['', Validators.required]
    })
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
