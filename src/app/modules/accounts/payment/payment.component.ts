import {Component, OnInit, ViewChild} from '@angular/core';
import {FeeTransactionsService} from '../../../shared/services/fee-transactions.service';
import {StudentsService} from '../../../shared/services/students.service';
import {Student} from '../../../shared/models/student';
import {FeeTransaction} from '../../../shared/models/fee-transaction';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

    students: Student[] = [];
    feeTransaction: FeeTransaction;
    paymentMethods = [];
    isGettingStudent: boolean = false;
    isProcessing: boolean = false;
    studentBalance: FeeTransaction = null;

    @ViewChild('form')
    paymentForm: NgForm;

    constructor(private feeTransactionsService: FeeTransactionsService,
                private studentsService: StudentsService, private router: Router) {
        this.feeTransaction = new FeeTransaction();
        this.feeTransaction.transactionDate = new Date();
        this.paymentMethods.push({name: 'Node', id: 1});
        this.paymentMethods.push({name: 'Cash', id: 2});

    }

    ngOnInit() {
        this.getStudents();
    }

    save() {
        // TODO
        this.isProcessing = true;
        this.feeTransactionsService
            .save(this.feeTransaction)
            .subscribe(feeTransaction => {
                this.feeTransaction = feeTransaction;
                this.isProcessing = false;
                this.paymentForm.resetForm();
                this.router.navigate(['/accounts']);
            }, error => {
                this.isProcessing = false;
            });
    }

    studentSelected(event: any) {
        this.isGettingStudent = true;
        this.studentBalance = null;
        this.feeTransactionsService
            .studentBalance(event.value.id)
            .subscribe(feeTransaction => {
                this.studentBalance = feeTransaction;
                this.isGettingStudent = false;
            }, error => {
                console.log(error);
                this.isGettingStudent = false;
            });
    }

    getStudents(): void {
        this.studentsService
            .all()
            .subscribe(students => {
                this.students = students;
            }, error => {
                console.log(error);
            });
    }

}
