import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-create',
  templateUrl: './categorias-create.component.html',
  styleUrls: ['./categorias-create.component.css']
})
export class CategoriasCreateComponent implements OnInit {

  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {
  }



  createCategorias(): void {
  this.categoriasService.showMessage('Categoria criado com sucesso!')
  }
  cancel(): void {
  this.router.navigate(['/categorias'])
  }
}