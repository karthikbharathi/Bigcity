import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileScreenPage } from './mobile-screen.page';

const routes: Routes = [
  {
    path: '',
    component: MobileScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileScreenPageRoutingModule {}
