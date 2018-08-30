import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth.routing';
import {ComponentModule} from '../../component/component.module';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import {AuthComponent} from './auth.component';
import {NotificaitonModule, LoadingModule} from './../../component/index';
import {SchoolUserAccountsService} from '../../shared/services/school-user-accounts.service';
import { SelectProfileComponent } from './select-profile/select-profile.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        ComponentModule,
        SharedModule,
        CoreModule
    ],
    providers: [SchoolUserAccountsService],
    declarations: [AuthComponent, SigninComponent, SignupComponent, SelectProfileComponent]
})
export class AuthModule {
}