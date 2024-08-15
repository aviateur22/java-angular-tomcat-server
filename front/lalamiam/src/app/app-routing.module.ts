import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { environment } from 'src/environments/environment';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: environment.webapp_path,
    children: [
      { path: "", component: HomePageComponent, title: "Accueil"},
      { path: "error", component: ErrorPageComponent, title: "Erreur"},
      { path: "users-page", component: UserPageComponent, title: "Page users"},
      { path: "not-found-page", component: NotFoundPageComponent, title: "404"}
    ]

  },
  { path: "", redirectTo: environment.webapp_path, pathMatch: "full"},
  { path: "**", redirectTo:"not-found-page", title: '404'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
