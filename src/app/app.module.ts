import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { StudentListComponent } from './student-list/student-list.component';
import { InlinestyleComponent } from './inlinestyle/inlinestyle.component';
import { InlinetemplateComponent } from './inlinetemplate/inlinetemplate.component';
import { InlinestypetemplateComponent } from './inlinestypetemplate/inlinestypetemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    StudentListComponent,
    InlinestyleComponent,
    InlinetemplateComponent,
    InlinestypetemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
