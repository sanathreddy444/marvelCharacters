import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersPageRoutingModule } from './characters-routing.module';

import { CharactersPage } from './characters.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from 'src/app/search-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CharactersPage,SearchFilterPipe]
})
export class CharactersPageModule {}
