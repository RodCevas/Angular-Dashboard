import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './widgets/cards/cards.component';
import { PieComponent } from './widgets/pie/pie.component';



const MaterialComponents = [
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardsComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    MaterialComponents,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MaterialComponents,
    AreaComponent,
    CardsComponent,
    PieComponent
    ]  
})
export class SharedModule { }
