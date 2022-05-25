import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginauthComponent } from './loginauth/loginauth.component';



@NgModule({
  declarations: [
    LoginauthComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginauthComponent
  ]
})
export class UserAuthModule {
  
 }
