import { Component } from '@angular/core';
import { ChartData, ChartConfiguration, ChartEvent } from 'chart.js';

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
      },
    ],
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        display: false,
        // position: 'right',
        // align: 'center',
        // labels: {
        //   boxHeight: 8,
        //   boxWidth: 8,
        //   boxPadding: 8,
        //   color: '#050505',
        //   font: {
        //     size: 10,
        //     family: 'Plus Jakarta Sans',
        //   },
        // },
      },
    },
  };
}
