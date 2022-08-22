import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ca1Component } from './ca/epma-ca1.component';
import { MedlistviewComponent } from './ca/medlistview/medlistview.component';
import { MedtabsComponent } from './ca/medtabs/medtabs.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';









// import { TopBarComponent } from './top-bar/top-bar.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CartComponent } from './cart/cart.component';
// import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MedtabsComponent },
      {path:'medlist',component:MedlistviewComponent}

    ]),
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    LayoutModule,
    LabelModule,
    ChartsModule,
    TooltipsModule
  ],
  declarations: [
    AppComponent,
    Ca1Component,
    MedlistviewComponent,
    MedtabsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
