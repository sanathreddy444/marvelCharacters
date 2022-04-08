import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicsListPageRoutingModule } from './comics-list-routing.module';

import { ComicsListPage } from './comics-list.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicsListPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ComicsListPage]
})
export class ComicsListPageModule {}
