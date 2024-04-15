import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { OtpScreenComponent } from './components/otp-screen/otp-screen.component';
import { LibraryComponent } from './components/library/library.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'sign-up', component: SignupComponent},
    { path: 'otp', component: OtpScreenComponent},
    { path: 'library', component: LibraryComponent }
];
