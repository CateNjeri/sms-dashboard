import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {AuthComponent} from './auth.component';
import {SelectProfileComponent} from './select-profile/select-profile.component';
import {AuthGuard} from '../../guards/auth.guard';


const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {path: '', component: SigninComponent},
            {path: 'register', component: SignupComponent},
            {path: 'login', component: SigninComponent},
            {path: 'accounts/choose', component: SelectProfileComponent},
        ]
    },

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {
}
