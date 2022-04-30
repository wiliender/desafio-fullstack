import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasCreateComponent } from './components/categorias/categorias-create/categorias-create.component';
import { CategoriasDeleteComponent } from './components/categorias/categorias-delete/categorias-delete.component';
import { CateogirasUpdateComponent } from './components/categorias/cateogiras-update/cateogiras-update.component';
import { DispositivosCreateComponent } from './components/dispositivos/dispositivos-create/dispositivos-create.component';
import { DispositivosDeleteComponent } from './components/dispositivos/dispositivos-delete/dispositivos-delete.component';
import { CategoriasCrudComponent } from './views/categorias-crud/categorias-crud.component';
import { DispositivosCrudComponent } from './views/dispositivos-crud/dispositivos-crud.component';
import { HomeComponent } from './views/home/home.component';


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
  },{
    path: 'categorias/create',
    component: CategoriasCreateComponent
  },{
    path: 'dispositivos/create',
    component: DispositivosCreateComponent
  },{
    path: 'categorias/update/:id',
    component: CateogirasUpdateComponent
  },{
    path: 'categorias/delete/:id',
    component: CategoriasDeleteComponent
  },{
    path: 'dispositivos/delete/:id',
    component: DispositivosDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
