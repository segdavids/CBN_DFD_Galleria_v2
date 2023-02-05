import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accomplishment-cards',
  templateUrl: './accomplishment-cards.component.html',
  styleUrls: ['./accomplishment-cards.component.scss']
})
export class AccomplishmentCardsComponent {

  @Input() imageUrl!: string;
  @Input() cardHeader !: string;
  @Input() cardBody !: string;

}
