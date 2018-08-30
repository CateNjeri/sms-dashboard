import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountsComponent} from './accounts.component';
import {PaymentComponent} from './payment/payment.component';
import {ReportComponent} from './report/report.component';
import {AccountsReportComponent} from './accounts-report/accounts-report.component';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import {ComponentModule} from '../../component/component.module';
import {AccountsRoutingModule} from './accounts.routing';
import {FeeTransactionsService} from '../../shared/services/fee-transactions.service';
import {StudentsService} from '../../shared/services/students.service';
import {ChartsModule} from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CoreModule,
        ComponentModule,
        AccountsRoutingModule,
        ChartsModule
    ],
    providers: [FeeTransactionsService, StudentsService],
    declarations: [AccountsComponent, PaymentComponent, ReportComponent, AccountsReportComponent]
})
export class AccountsModule {
}
