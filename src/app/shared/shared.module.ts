import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AccomplishmentCardsComponent } from './accomplishment-cards/accomplishment-cards.component';
import { FocalSectorsCardsComponent } from './focal-sectors-cards/focal-sectors-cards.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AccomplishmentCardsComponent,
    FocalSectorsCardsComponent,
  ],
  imports: [CommonModule, RouterModule, MatMenuModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    AccomplishmentCardsComponent,
    FocalSectorsCardsComponent,
  ],
})
export class SharedModule {}
