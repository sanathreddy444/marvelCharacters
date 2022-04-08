import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsDescriptionPage } from './comics-description.page';

const routes: Routes = [
  {
    path: '',
    component: ComicsDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsDescriptionPageRoutingModule {}
