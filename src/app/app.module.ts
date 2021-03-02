// Modules Angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SellsModule } from './sells/sells.module';

// Components
import { AppComponent } from './app.component';

// Change App Locale / register locale
import localeEs  from '@angular/common/locales/es';
import localeFr  from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SellsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
