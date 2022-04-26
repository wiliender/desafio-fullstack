import { Router, ActivatedRoute } from '@angular/router';
import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { Categorias } from '../categorias.model';

@Component({
  selector: 'app-categorias-delete',
  templateUrl: './categorias-delete.component.html',
  styleUrls: ['./categorias-delete.component.css']
})
export class CategoriasDeleteComponent implements OnInit {

  categorias: Categorias = {
    name: ''
  }

  constructor(private categoriasService: CategoriasService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      throw Error
    }
    this.categoriasService.readById(id).subscribe(categorias => {
      this.categorias = categorias;
    })
  }

  deleteCategorias(): void {
    if (this.categorias.id != null) {
      this.categoriasService.delete(this.categorias.id).subscribe(() => {
        this.categoriasService.showMessage('Categoria excluída com sucesso!')
        this.router.navigate(['/categorias'])
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/categorias'])
  }

}
