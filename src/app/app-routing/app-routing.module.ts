import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInComponent} from '../sign-in/sign-in.component';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
