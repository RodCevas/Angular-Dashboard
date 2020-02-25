import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ContactsComponent } from 'src/app/modules/contacts/contacts.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SettingsComponent } from 'src/app/modules/settings/settings.component';
import { FaqComponent } from 'src/app/modules/faq/faq.component';
import { PostCreateComponent } from 'src/app/modules/posts/post-create/post-create.component';
import { PostListComponent } from 'src/app/modules/posts/post-list/post-list.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ContactsComponent,
    SettingsComponent,
    FaqComponent,
    PostCreateComponent,
    PostListComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    ],
  exports: [],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
