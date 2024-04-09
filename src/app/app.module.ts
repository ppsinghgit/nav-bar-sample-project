import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  IgxAvatarModule,
  IgxButtonModule,
  IgxDialogModule,
  IgxDropDownModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxListModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxSelectModule,
  IgxToggleModule,
} from 'igniteui-angular';
import { NavDrawerSimpleComponent } from './nav-drawer-simple/nav-drawer-simple.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, NavDrawerSimpleComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxNavbarModule,
    IgxDropDownModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxToggleModule,
    IgxSelectModule,
    IgxAvatarModule,
    IgxListModule,
    RouterModule,
  ],
  providers: [],
  schemas: [],
})
export class AppModule {}
