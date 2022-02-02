import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileScreenPageRoutingModule } from './mobile-screen-routing.module';

import { MobileScreenPage } from './mobile-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileScreenPageRoutingModule
  ],
  declarations: [MobileScreenPage]
})
export class MobileScreenPageModule {}
