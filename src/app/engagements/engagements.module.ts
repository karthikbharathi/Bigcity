import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngagementsPageRoutingModule } from './engagements-routing.module';

import { EngagementsPage } from './engagements.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngagementsPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [EngagementsPage]
})
export class EngagementsPageModule {}
