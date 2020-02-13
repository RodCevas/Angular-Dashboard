import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-widget-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() porcentage: string;
  
  chartOptions = {};

  Highcharts = Highcharts;
  @Input() data = [];

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
        margin: [2, 2, 2, 2]
      },
      title: {
          text: null,
      },
      subtitle: {
        text: null,
    },
      exporting: {
        enabled: false,
      },
      tooltip: {
          split: true,
          outside: true,
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [{
          data: this.data
      }]
    };
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
