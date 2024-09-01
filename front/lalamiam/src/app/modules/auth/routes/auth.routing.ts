//@ts-nocheck
import { Route } from "@angular/router";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { RegisterPageComponent } from "../pages/register-page/register-page.component";
import { environment } from "src/environments/environment";
import pageTitle from "src/app/utils/page-title";
import frontendLinkUrl from "src/app/utils/frontend-link-url";
import { AccountActivationPageComponent } from "../pages/account-activation-page/account-activation-page.component";
import { ChangeAccountPasswordPageComponent } from "../pages/change-account-password-page/change-account-password-page.component";
import { LostPasswordMailingPageComponent } from "../pages/lost-password-mailing-page/lost-password-mailing-page.component";

export const authRouting: Route[] = [
  {
    path: environment.webapp_path,
    children: [
      { path: frontendLinkUrl.login.url, component: LoginPageComponent, title: pageTitle.loginPageTitle[environment.language]},
      { path: frontendLinkUrl.register.url, component: RegisterPageComponent, title: pageTitle.registerPageTitle[environment.language]},
      { path: frontendLinkUrl.accountActivation.url, component: AccountActivationPageComponent, title: pageTitle.activateAccountTitle[environment.language]},
      { path: frontendLinkUrl.changeAccountPassword.url, component: ChangeAccountPasswordPageComponent, title: pageTitle.changeAccountPasswordTitle[environment.language]},
      { path: frontendLinkUrl.lostPasswordMailingPage.url, component: LostPasswordMailingPageComponent, title: pageTitle.lostPasswordMailingTitle[environment.language]}
    ]

  }
]
