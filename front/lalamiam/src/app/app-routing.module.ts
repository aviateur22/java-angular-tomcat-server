//@ts-nocheck
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { environment } from 'src/environments/environment';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import pageTitle from './utils/page-title';

const routes: Routes = [
  {
    path: environment.webapp_path,
    children: [
      { path: "", component: HomePageComponent, title: pageTitle.homePageTitle[environment.language]},
      { path: "error", component: ErrorPageComponent, title: pageTitle.errorPageTitle[environment.language]},
      { path: "users-page", component: UserPageComponent, title: pageTitle.userHomePageTitle[environment.language]},
      { path: "not-found-page", component: NotFoundPageComponent, title: pageTitle.notFoundPageTitle[environment.language]}
    ]

  },
  { path: "", redirectTo: environment.webapp_path, pathMatch: "full"},
  { path: "**", redirectTo:"not-found-page", title: pageTitle.notFoundPageTitle[environment.language]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
