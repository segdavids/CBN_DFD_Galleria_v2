import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-focal-sectors-cards',
  templateUrl: './focal-sectors-cards.component.html',
  styleUrls: ['./focal-sectors-cards.component.scss']
})
export class FocalSectorsCardsComponent {
  @Input() imageUrl!: string;
  @Input() cardBody !: string;
  @Input() linkUrl !: string;
}
