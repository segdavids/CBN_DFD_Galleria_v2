import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { MsmeComponent } from './msme/msme.component';
import { HealthComponent } from './health/health.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ExportComponent } from './export/export.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomepageComponent,
    AboutComponent,
    AgricultureComponent,
    ManufacturingComponent,
    MsmeComponent,
    HealthComponent,
    InfrastructureComponent,
    ExportComponent,
    LandingLayoutComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
