import { Route } from "@angular/router";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { RegisterPageComponent } from "../pages/register-page/register-page.component";

export const authRouting: Route[] = [
  {
    path: "lalamiam",
    children: [
      { path: "connexion", component: LoginPageComponent, title: "Connexion"},
      { path: "register", component: RegisterPageComponent, title: "Creation compte"},
    ]

  }
]
