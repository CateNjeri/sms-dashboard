import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import 'hammerjs';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {HeaderModule} from './shared/components/header/header.module';
import {SidenavModule} from './shared/components/sidenav/sidenav.module';
import {AppRoutingModule} from './app.routing';

import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {CoreModule} from './core/core.module';

import {MaterialComponentsModule} from './shared/material.module';
import {AuthGuard} from './guards/auth.guard';
import {EncryptionService} from './core/encryption.service';
import {StorageService} from './core/storage.service';
import {SessionsService} from './core/sessions.service';
import {SanitizeHtmlPipe} from './pipes/sanitize-html.pipe';
import {FooterComponent} from './shared/components/footer/footer.component';

// import {NgProgressModule} from '@ngx-progressbar/core'
// import {NgProgressRouterModule} from '@ngx-progressbar/router'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        SharedModule,
        HeaderModule,
        SidenavModule,
        AppRoutingModule,
        CoreModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        PerfectScrollbarModule.forRoot(DEFAULT_PERFECT_SCROLLBAR_CONFIG)
    ],
    providers: [AuthGuard, EncryptionService, StorageService, SessionsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
