import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersDescriptionPageRoutingModule } from './characters-description-routing.module';

import { CharactersDescriptionPage } from './characters-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersDescriptionPageRoutingModule
  ],
  declarations: [CharactersDescriptionPage]
})
export class CharactersDescriptionPageModule {}
