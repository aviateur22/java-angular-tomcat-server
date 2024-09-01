//@ts-nocheck
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { environment } from 'src/environments/environment';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import pageTitle from './utils/page-title';
import frontendLinkUrl from './utils/frontend-link-url';

const routes: Routes = [
  {
    path: environment.webapp_path,
    children: [
      { path: frontendLinkUrl.home.url, component: HomePageComponent, title: pageTitle.homePageTitle[environment.language]},
      { path: frontendLinkUrl.error.url, component: ErrorPageComponent, title: pageTitle.errorPageTitle[environment.language]},
      { path: frontendLinkUrl.userHome.url, component: UserPageComponent, title: pageTitle.userHomePageTitle[environment.language]},
      { path: frontendLinkUrl.notFound.url, component: NotFoundPageComponent, title: pageTitle.notFoundPageTitle[environment.language]}
    ]
  },
  { path: '', redirectTo: `${environment.webapp_path}/${frontendLinkUrl.home.url}`, pathMatch: 'full'},
  { path: "**", redirectTo:`${environment.webapp_path}/${frontendLinkUrl.notFound.url}`, pathMatch: "full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
