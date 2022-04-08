import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicsDescriptionPageRoutingModule } from './comics-description-routing.module';

import { ComicsDescriptionPage } from './comics-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicsDescriptionPageRoutingModule
  ],
  declarations: [ComicsDescriptionPage]
})
export class ComicsDescriptionPageModule {}
