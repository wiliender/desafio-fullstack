import { CategoriasDeleteComponent } from './components/categorias/categorias-delete/categorias-delete.component';
import { CateogirasUpdateComponent } from './components/categorias/cateogiras-update/cateogiras-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { CategoriasCrudComponent } from './views/categorias-crud/categorias-crud.component'
import { DispositivosCrudComponent } from './views/dispositivos-crud/dispositivos-crud.component'
import { CategoriasCreateComponent } from './components/categorias/categorias-create/categorias-create.component'
import { DispositivosCreateComponent } from './components/dispositivos/dispositivos-create/dispositivos-create.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
