import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FeeTransactionsService} from '../../shared/services/fee-transactions.service';
import {AuthService} from '../../core/auth.service';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
    feeTransactionTable = {
        loading: false,
        columns: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: 'Reference No.',
                key: 'referenceNumber',
                width: 117,
                fixed: 'left'
            },
            {
                title: 'Student',
                key: 'student.surname',
                width: 100
            },
            {
                title: 'Date',
                key: 'transactionDate',
                width: 100
            },
            {
                title: 'Amount',
                key: 'amount',
                width: 100
            },
            {
                title: 'Balance',
                key: 'balance',
                width: 100
            },
            {
                title: 'Actions',
                type: 'actions',
                actions: [
                    {
                        name: 'View'
                    },
                    {
                        name: 'Print',
                        icon: 'print'
                    }
                ],
                width: 200
            }
        ],
        data: []
    };
    public hasPaymentPermission: boolean = false;

    constructor(private router: Router,
                private feeTransactionsService: FeeTransactionsService,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.getTransactions();
        this.hasPaymentPermission = this.authService.getCurrentUserType() === 1;
    }

    getTransactions() {
        this.feeTransactionTable.loading = true;
        this.feeTransactionsService
            .all()
            .subscribe(feeTransactions => {
                this.feeTransactionTable.data = feeTransactions;
                this.feeTransactionTable.loading = false;
            }, error => {
                this.feeTransactionTable.loading = false;
            });
    }

    onSelectChange(event): void {
        console.log(event);
    }

    addPayment(): void {
        this.router.navigate(['/accounts/payments']);
    }
}
