import { Component, HostListener } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/store/app.state';
import { getEmailSelector } from 'src/store/user-ident-store/selector';
import * as Action from 'src/app/modules/auth/store/auth-store/action'
import { environment } from 'src/environments/environment';
import { ConfirmationService, MessageService, ConfirmEventType, MenuItem } from 'primeng/api';
import frontendLinkUrl from 'src/app/utils/frontend-link-url';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  userEmail$: Observable<string>;
  isLogoutVisible: boolean = false;
  isMenuVisible:boolean = false;
  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: `/`,
      icon: 'pi pi-user'
    },
    {
      label: 'User',
      routerLink: `/`,
      icon: 'pi pi-cog'
    }
  ]
  activeItem: MenuItem | undefined = undefined;

   /**
   * Path pour afficher la web_app
   */
  webappPath: string = environment.webapp_path;

  homeLink!: string;
  userLink!: string;
  registerLink!: string;
  loginLink!: string


  constructor(private _store: Store<AppState>) {
    this.userEmail$ = this._store.pipe(select(getEmailSelector));

  }

  ngOnInit() {
    this.homeLink = `/${this.webappPath}/${frontendLinkUrl.home.url}`;
    this.userLink = `/${this.webappPath}/${frontendLinkUrl.userHome.url}`;
    this.loginLink = `/${this.webappPath}/${frontendLinkUrl.login.url}`;
  }

  /**
   * Toggle LogoutOverlay
   */
  displayLogoutOverlay() {
    this.isLogoutVisible = !this.isLogoutVisible;
  }

  /**
   * Toggle MenuOverlay
   */
  displayMenuOverlay() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  logout() {
    this._store.dispatch(Action.logout());
    this.displayLogoutOverlay();
  }

  /**
   *
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWidth();
  }

  /**
   *
   */
  checkWidth() {
    if (window.innerWidth > 768 && this.isMenuVisible) {
      this.isMenuVisible = false;
    }
  }

}
