import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionFormComponent} from './session-form/session-form.component';
import {SessionsRoutingModule} from './sessions.routing';
import {SessionsComponent} from './sessions.component';
import {ComponentModule} from '../../../component/component.module';
import {SharedModule} from '../../../shared/shared.module';
import {SchoolSessionsService} from '../../../shared/services/school-sessions.service';

@NgModule({
    imports: [
        CommonModule,
        SessionsRoutingModule,
        ComponentModule,
        SharedModule
    ],
    providers: [SchoolSessionsService],
    entryComponents: [SessionFormComponent],
    declarations: [SessionsComponent, SessionFormComponent]
})
export class SessionsModule {
}
