//@ts-nocheck
import { Route } from "@angular/router";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { RegisterPageComponent } from "../pages/register-page/register-page.component";
import { environment } from "src/environments/environment";
import pageTitle from "src/app/utils/page-title";

export const authRouting: Route[] = [
  {
    path: environment.webapp_path,
    children: [
      { path: "connexion", component: LoginPageComponent, title: pageTitle.loginPageTitle[environment.language]},
      { path: "register", component: RegisterPageComponent, title: pageTitle.registerPageTitle[environment.language]},
    ]

  }
]
