import {Component, OnInit} from '@angular/core';
import {FeeTransactionsService} from '../../../shared/services/fee-transactions.service';
import {FeeCollectionReportRequest} from '../../../shared/models/fee-collection-report-request';

@Component({
    selector: 'app-accounts-report',
    templateUrl: './accounts-report.component.html',
    styleUrls: ['./accounts-report.component.scss']
})
export class AccountsReportComponent implements OnInit {
    feeCollectionReportRequest: FeeCollectionReportRequest;

    public lineChartData: Array<any> = [{data: [], label: ''}];
    public lineChartLabels: Array<any> = [''];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    constructor(private feeTransactionsService: FeeTransactionsService) {
        this.feeCollectionReportRequest = new FeeCollectionReportRequest();
    }

    ngOnInit() {
        this.getCollectionTrend();
    }

    private getCollectionTrend() {
        this.feeTransactionsService
            .collectionReport(this.feeCollectionReportRequest)
            .subscribe(chart => {
                this.lineChartLabels = chart.chartLabels;
                for (const chartSeries of chart.chartSeries) {
                    this.lineChartData.push({data: chartSeries.values, label: chartSeries.label});
                }
            });
    }
}
