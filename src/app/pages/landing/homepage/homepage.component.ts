import { Component } from '@angular/core';
import { ChartData, ChartConfiguration, ChartEvent } from 'chart.js';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  labels: any[] = [
    { label: 'Agriculture:  31.3%', color: '#009C19' },
    { label: 'Electricity and Power: 29.3%', color: '#FFAE1B' },
    { label: 'Manufacturing: 18.63%', color: '#54C5EB' },
    { label: 'Healthcare: 1.97%', color: '#74057D' },
    { label: 'Energy and Infrastructure : 8.12%', color: '#0034BA' },
    { label: 'Services :15.07%', color: '#8F5E05' },
  ];

  public doughnutChartLabels: string[] = [
    'Agriculture',
    'Electricity and Power',
    'Manufacturing',
    'Healthcare',
    'Energy and Infrastructure',
    'Services',
  ];

  chartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [31.3, 29.3, 18.63, 1.97, 8.12, 15.07],
        backgroundColor: [
          '#009C19',
          '#FFAE1B',
          '#54C5EB',
          '#74057D',
          '#0034BA',
          '#8F5E05',
        ],
        hoverOffset: 25,
        offset: 5
      },
    ],
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
        labels: {
          boxHeight: 12,
          boxWidth: 12,
          boxPadding: 8,
          usePointStyle: true,
          pointStyle: 'circle',
          color: '#050505',
          font: {
            size: 10,
            family: 'Plus Jakarta Sans',
          },
        },
      },
    },
  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    margin: 20,
    responsive: {
      0: {
        items: 2
      },
      650: {
        items: 3
      },
      768: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false,
    stagePadding: 75
  }

  customLabels = [
    {text: 'Agriculture', value: 31.3, color: '#07A254'},
    {text: 'Electricity and Power', value: 25.3, color: '#4D7DF7'},
    {text: 'Manufacturing', value: 18.33, color: '#6B6158'},
    {text: 'Healthcare', value: 1.97, color: '#FA393A'},
    {text: 'Energy and Infrastructure', value: 8.03, color: '#1DD9A4'},
    {text: 'Services', value: 15.07, color: '#FBB206'},
  ]

  getWidth(value: number): string {
    let total = 0
    for (let n of this.customLabels) {
      total = total + n.value
    }
    return ((value / total) * 100) + 'px'
  }
}
