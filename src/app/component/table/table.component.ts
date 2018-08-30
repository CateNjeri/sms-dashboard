import {Component, OnInit, OnChanges, AfterViewInit} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {ElementRef, ViewChild, Renderer2} from '@angular/core';
import {retry} from 'rxjs/operator/retry';
import {Router} from '@angular/router';
import {SimpleChanges} from '@angular/core/src/metadata/lifecycle_hooks';
import {MatMenu, MatMenuTrigger} from '@angular/material';

@Component({
    selector: 'stbui-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {

    @Input() data = [];
    _query: String = '';
    @Input() columns = [];
    @Input() stripe: boolean = false;
    @Input() border: boolean = true;
    @Input() showHeader: boolean = true;
    @Input() width: string | number;
    @Input() height: string | number;
    @Input() disabledHover: boolean = true;
    @Input() highlightRow: boolean = true;
    @Input() tableSize: string = 'default';
    @Input() loading: boolean = false;

    @Output() onCurrentChange = new EventEmitter();
    @Output() onSelect = new EventEmitter();
    @Output() onSelectCancel = new EventEmitter();
    @Output() onSelectAll = new EventEmitter();
    @Output() onSelectChange = new EventEmitter();
    @Output() onSortChange = new EventEmitter();
    @Output() onRowClick = new EventEmitter();
    @Output() onActionClick = new EventEmitter();

    cloneColumns;

    checkboxSelection = [];
    checked: boolean = false;

    filteredData = [];

    @ViewChild('fixedTopCell') _fixedTopCell: ElementRef;
    @ViewChild('actionsMenuTrigger') actionsMenuTrigger: MatMenuTrigger;
    private cells = [];

    @Input() set query(value: String) {
        this._query = value;
        this.search();
    }

    get query(): String {
        return this._query;

    }

    constructor(private element: ElementRef, private renderer: Renderer2, private router: Router) {

    }

    ngOnInit() {
        this.filteredData = this.data;
        this.query = '';
    }

    ngAfterViewInit() {
        if (!this.height) return;
        const ths = this._fixedTopCell.nativeElement.children[0].children;

        setTimeout(() => {
            for (const th of ths) {
                this.cells.push({
                    width: th.offsetWidth,
                    height: th.offsetHeight
                });
            }
            this.border = true;
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        // this.search(changes.query.currentValue);
    }

    fixedRightTableStyle() {
        const style = {};
        let width = 0;
        const rightFixedColumns = this.rightFixedColumns();
        rightFixedColumns.forEach((col) => {
            if (col.fixed && col.fixed === 'right') {
                width += col._width;
            }
        });
        // width += this.scrollBarWidth;
        return {
            width: `${width}px`
        };
    }

    leftFixedColumns() {
        const left = [];
        const other = [];
        this.cloneColumns.forEach((col) => {
            if (col.fixed && col.fixed === 'left') {
                left.push(col);
            } else {
                other.push(col);
            }
        });
        return left;
    }

    rightFixedColumns() {
        let right = [];
        let other = [];
        this.cloneColumns.forEach((col) => {
            if (col.fixed && col.fixed === 'right') {
                right.push(col);
            } else {
                other.push(col);
            }
        });
        return right;
    }

    isLeftFixed() {
        return this.columns.some(col => col.fixed && col.fixed === 'left');
    }

    isRightFixed() {
        return this.columns.some(col => col.fixed && col.fixed === 'right');
    }

    onRowClickTrigger(row) {
        this.onRowClick.emit(row);
        // this.actionsMenuTrigger.openMenu();
    }

    actionClicked(action, row) {
        this.onActionClick.emit({action: action, row: row});
    }

    onCheckBoxTrigger($event, row) {
        if ($event.checked) {
            this.checkboxSelection.push(row);
        } else {
            this.checkboxSelection = this.checkboxSelection.filter((source) => source !== row);
        }
        this.onSelectChange.emit(this.checkboxSelection);
    }

    onCheckBoxAllTrigger($event) {
        if ($event.checked) {
            this.checkboxSelection = this.data;
        } else {
            this.checkboxSelection = [];
        }

        this.onSelectAll.emit(this.checkboxSelection);
    }

    readProperty(object: any, key: string): any {
        if (object === 'undefined') {
            return false;
        }
        const concatIndex = key.indexOf(',');
        let value = '';
        if (concatIndex > -1) {
            const _key = key.substring(0, concatIndex);
            if (_key === ':') {
                value += ' ';
            } else {
                value += this.readProperty(object, _key);
            }
        } else {
            const _index = key.indexOf('.');
            if (_index > -1) {
                value += this.readProperty(object[key.substring(0, _index)], key.substring(_index + 1));
            } else {
                value += object[key];
            }
        }
        return value;
    }

    format(data: any, formatter: any): any {
        return formatter(data);
    }

    search(): void {
        this.filteredData = [];
        if (this.query === '') {
            this.filteredData = this.data;
            return;
        }
        for (const row of this.data) {
            if (this.searchRow(row)) {
                this.filteredData.push(row);
            }
        }
    }

    searchRow(row: any): boolean {
        for (const value of row) {
            if (value === this._query) {
                return true;
            }
        }
        return this.data.length % 2 === 0;
    }
}
