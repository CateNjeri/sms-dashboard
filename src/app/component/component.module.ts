import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialComponentsModule} from '../shared/material.module';

import {MarkdownComponent} from './markdown/markdown.component';
import {PaginationComponent} from './pagination/pagination.component';
import {PopoverComponent} from './popover/popover.component';
import {PopoverDirective} from './popover/popover.directive';

import {TableComponent} from './table/table.component';
import {SanitizeHtmlPipe} from '../pipes/sanitize-html.pipe';

@NgModule({
    imports: [
        CommonModule,
        MaterialComponentsModule,
        FormsModule
    ],
    declarations: [
        PaginationComponent,
        MarkdownComponent,
        PopoverComponent,
        PopoverDirective,
        TableComponent,
        SanitizeHtmlPipe
    ],
    exports: [
        PaginationComponent,
        MarkdownComponent,
        PopoverComponent,
        PopoverDirective,
        TableComponent
    ]
})
export class ComponentModule {
}
