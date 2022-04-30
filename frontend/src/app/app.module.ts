import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasCreateComponent } from './components/categorias/categorias-create/categorias-create.component';
import { CategoriasDeleteComponent } from './components/categorias/categorias-delete/categorias-delete.component';
import { CategoriasReadComponent } from './components/categorias/categorias-read/categorias-read.component';
import { CateogirasUpdateComponent } from './components/categorias/cateogiras-update/cateogiras-update.component';
import { DispositivosCreateComponent } from './components/dispositivos/dispositivos-create/dispositivos-create.component';
import { DispositivosReadComponent } from './components/dispositivos/dispositivos-read/dispositivos-read.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { RedDirective } from './directives/red.directive';
import { CategoriasCrudComponent } from './views/categorias-crud/categorias-crud.component';
import { DispositivosCrudComponent } from './views/dispositivos-crud/dispositivos-crud.component';
import { HomeComponent } from './views/home/home.component';
import { DispositivosDeleteComponent } from './components/dispositivos/dispositivos-delete/dispositivos-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriasCrudComponent,
    DispositivosCrudComponent,
    RedDirective,
    CategoriasCreateComponent,
    DispositivosCreateComponent,
    CategoriasReadComponent,
    CateogirasUpdateComponent,
    CategoriasDeleteComponent,
    DispositivosReadComponent,
    DispositivosDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
