import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    PageNotFoundComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
