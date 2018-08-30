import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserAccountsComponent} from './user-accounts/user-accounts.component';
import {SetupsComponent} from './setups.component';
import {SchoolProfileComponent} from './school-profile/school-profile.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
    {path: '', component: SetupsComponent},
    {path: 'profile', component: UserProfileComponent},
    {path: 'school', component: SchoolProfileComponent},
    {path: 'sessions', loadChildren: './sessions/sessions.module#SessionsModule'},
    {path: 'user-accounts', component: UserAccountsComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SetupsRoutingModule {
}

