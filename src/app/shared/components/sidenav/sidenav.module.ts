import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {RouterModule} from '@angular/router';

import {SidenavComponent} from './sidenav.component';
import {ItemComponent} from './item/item.component';
import {SidenavService} from './sidenav.service';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {CoreModule} from "../../../core/core.module";
import {StudentsService} from "../../services/students.service";


@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        CoreModule,
        PerfectScrollbarModule.forChild(),
    ],
    declarations: [
        SidenavComponent,
        ItemComponent
    ],
    exports: [
        SidenavComponent
    ],
    providers: [
        StudentsService,
        {provide: 'sidenavService', useClass: SidenavService}
    ]
})
export class SidenavModule {
}
