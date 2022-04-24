import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias } from '../categorias.model';

@Component({
  selector: 'app-categorias-create',
  templateUrl: './categorias-create.component.html',
  styleUrls: ['./categorias-create.component.css']
})
export class CategoriasCreateComponent implements OnInit {
  
  categorias: Categorias = {
    name: ''
  }

  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {

  }

  createCategorias(): void {
    this.categoriasService.create(this.categorias).subscribe(() => {
      this.categoriasService.showMessage('Categoria criado com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }
  
  cancel(): void {
  this.router.navigate(['/categorias'])
  }
}

