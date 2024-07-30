import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  message: string = '';

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUsers().subscribe(res=>this.message=res);
  }

}
