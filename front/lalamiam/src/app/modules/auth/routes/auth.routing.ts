import { Route } from "@angular/router";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { RegisterPageComponent } from "../pages/register-page/register-page.component";
import { environment } from "src/environments/environment";

export const authRouting: Route[] = [
  {
    path: environment.webapp_path,
    children: [
      { path: "connexion", component: LoginPageComponent, title: "Connexion"},
      { path: "register", component: RegisterPageComponent, title: "Creation compte"},
    ]

  }
]
