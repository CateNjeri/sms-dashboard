import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SetupsComponent} from './setups.component';
import {UserAccountsComponent} from './user-accounts/user-accounts.component';
import {SchoolProfileComponent} from './school-profile/school-profile.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {SetupsRoutingModule} from './setups.routing';
import {SharedModule} from '../../shared/shared.module';
import {ComponentModule} from '../../component/component.module';
import {SchoolUserAccountsService} from '../../shared/services/school-user-accounts.service';

@NgModule({
    imports: [
        CommonModule,
        SetupsRoutingModule,
        SharedModule,
        ComponentModule
    ],
    providers: [SchoolUserAccountsService],
    declarations: [SetupsComponent, UserAccountsComponent, SchoolProfileComponent, UserProfileComponent]
})
export class SetupsModule {
}
