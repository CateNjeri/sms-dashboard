import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {Http} from '@angular/http';
import {AuthService} from '../../core/auth.service';
import {FeeTransaction} from '../models/fee-transaction';
import {Observable} from 'rxjs';
import {FeeCollectionReportRequest} from '../models/fee-collection-report-request';

@Injectable()
export class FeeTransactionsService extends BaseService {

    constructor(protected http: Http, private authService: AuthService) {
        super(http);
    }

    all(): Observable<FeeTransaction[]> {
        if (this.authService.getCurrentUserType() === 1) {
            const school = this.authService.getSchool();
            return this.get('schools/' + school.id + '/fee-transactions');
        } else if (this.authService.getCurrentUserType() === 3) {
            return this.get('fee-transactions');
        } else {
            // TODO: for parent, get active student then get student transactions
            const student = this.authService.getCurrentStudent();
            return this.get('students/' + student.id + '/fee-transactions');
        }
    }

    save(feeTransaction: FeeTransaction): Observable<FeeTransaction> {
        // TODO: get current active school session
        feeTransaction.userAccount = this.authService.getCurrentUser();
        return this.post('fee-transactions', feeTransaction);
    }

    studentTransactions(id: number): Observable<FeeTransaction[]> {
        return this.get('students/' + id + '/fee-transactions');
    }

    studentBalance(id: number): Observable<FeeTransaction> {
        return this.get('students/' + id + '/fee-transactions/balance');
    }

    collectionReport(feeCollectionReportRequest: FeeCollectionReportRequest): Observable<any> {
        feeCollectionReportRequest.schoolId = this.authService.getSchool().id;
        return this.post('fee-transactions/trend', feeCollectionReportRequest);
    }
}
