import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ContactsComponent } from 'src/app/modules/contacts/contacts.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SettingsComponent } from 'src/app/modules/settings/settings.component';
import { FaqComponent } from 'src/app/modules/faq/faq.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ContactsComponent,
    SettingsComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MaterialModule
    ],
  exports: [],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
