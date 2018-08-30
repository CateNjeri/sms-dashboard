import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { StateComponent } from './state/state.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    StateComponent,
    SwitchComponent
  ],
  exports: [
    StateComponent,
    SwitchComponent
  ]
})
export class WidgetModule {
}
