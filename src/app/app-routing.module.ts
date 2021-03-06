import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessengerComponent} from "./messenger/messenger.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'messenger',
    component: MessengerComponent
  },
  {
    path: 'registration',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
