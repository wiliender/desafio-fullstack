import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { CategoriasCrudComponent } from './views/categorias-crud/categorias-crud.component'
import { DispositivosCrudComponent } from './views/dispositivos-crud/dispositivos-crud.component'

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },{
    path: 'categorias',
    component: CategoriasCrudComponent
  },{
    path: 'dispositivos',
    component: DispositivosCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
