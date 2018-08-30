import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountsComponent} from "./accounts.component";
import {PaymentComponent} from "./payment/payment.component";
import {AccountsReportComponent} from "./accounts-report/accounts-report.component";


const routes: Routes = [
    {path: '', component: AccountsComponent},
    {path: 'transactions', component: AccountsComponent},
    {path: 'payments/:id', component: PaymentComponent},
    {path: 'payments', component: PaymentComponent},
    {path: 'report', component: AccountsReportComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountsRoutingModule {
}

