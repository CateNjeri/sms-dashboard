import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {SessionsComponent} from './sessions.component';

const routes: Route[] = [
    {path: '', component: SessionsComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionsRoutingModule {
}
