import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassesComponent} from './classes.component';
import {ClassLevelSectionsComponent} from "./class-level-sections/class-level-sections.component";



const routes: Routes = [
    { path: '', component: ClassesComponent },
    { path: 'view', component: ClassesComponent },
    { path: 'sections', component: ClassLevelSectionsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClassesRoutingModule {
}

