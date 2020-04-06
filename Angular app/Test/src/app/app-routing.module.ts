import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraComponentComponent } from './extra-component/extra-component.component';

const routes: Routes = [
  {path : 'second', component: ExtraComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
