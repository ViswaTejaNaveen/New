import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: RegisterComponent},
  { path: 'setpassword', component: SetpasswordComponent}

];



@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes), MatCardModule,FormsModule, ReactiveFormsModule,MatFormFieldModule,MatInputModule
  ],
  declarations: [LoginComponent, RegisterComponent, SetpasswordComponent],
  providers: [AuthService]
})
export class AuthModule { }
