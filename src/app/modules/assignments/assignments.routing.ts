import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AssignmentsComponent} from './assignments.component';
import {AssignmentFormComponent} from './assignment-form/assignment-form.component';

const routes: Routes = [
    {path: '', component: AssignmentsComponent},
    {path: ':id/view', component: AssignmentsComponent},
    {path: 'add', component: AssignmentFormComponent},
    {path: ':id/edit', component: AssignmentFormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AssignmentsRoutingModule {
}

