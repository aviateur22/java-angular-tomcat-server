import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import frontendLinkUrl from 'src/app/utils/frontend-link-url';

@Component({
  selector: 'app-account-activation-page',
  templateUrl: './account-activation-page.component.html',
  styleUrls: ['./account-activation-page.component.css']
})
export class AccountActivationPageComponent {
  activationToken: string | null = '';
  userEmail: string | null = ''

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.userEmail = this._activatedRoute.snapshot.paramMap.get('user-email');
    this.activationToken = this._activatedRoute.snapshot.paramMap.get('confirmation-token');

    if(this.userEmail === null || this.userEmail.trim() === '' || this.activationToken === null || this.activationToken.trim() === '') {
      this._router.navigate([frontendLinkUrl.error.url]);
    }
  }
}
