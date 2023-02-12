import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sectors-view',
  templateUrl: './sectors-view.component.html',
  styleUrls: ['./sectors-view.component.scss'],
})
export class SectorsViewComponent {
  @Input() header!: string;
  @Input() headerBanner!: string;
  @Input() stats!: {
    stat: string;
    text: string;
    image: string;
    mt?: boolean;
  }[];
  @Input() listing!: {
    image: string;
    title: string;
    shortTitle: string;
    list: string[];
  }[];
}
