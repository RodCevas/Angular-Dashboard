import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { FaqComponent } from './modules/faq/faq.component';
import { PostCreateComponent } from './modules/posts/post-create/post-create.component';
import { PostListComponent } from './modules/posts/post-list/post-list.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from './modules/dashboard.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactsComponent,
    SettingsComponent,
    FaqComponent,
    PostCreateComponent,
    PostListComponent,
    PostsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
