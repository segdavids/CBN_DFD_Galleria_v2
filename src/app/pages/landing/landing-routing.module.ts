import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ExportComponent } from './export/export.component';
import { HealthComponent } from './health/health.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { MsmeComponent } from './msme/msme.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'agriculture', component: AgricultureComponent },
      { path: 'export', component: ExportComponent },
      { path: 'health', component: HealthComponent },
      { path: 'infrastructure', component: InfrastructureComponent },
      { path: 'manufacturing', component: ManufacturingComponent },
      { path: 'msme', component: MsmeComponent },
      { path: 'products', component: ProductsComponent},
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
