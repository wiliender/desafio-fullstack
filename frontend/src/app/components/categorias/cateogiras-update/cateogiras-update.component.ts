import { Categorias } from './../categorias.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cateogiras-update',
  templateUrl: './cateogiras-update.component.html',
  styleUrls: ['./cateogiras-update.component.css']
})
export class CateogirasUpdateComponent implements OnInit {

  categorias!: Categorias;
  name: string = '';

  constructor(private categoriasService: CategoriasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id === null) {
      throw Error
    }
    this.categoriasService.readById(id).subscribe(categorias => {
      this.categorias = categorias;
      this.name = this.categorias.name;
    });
  }

  updateCateogrias(): void {
    this.categorias.name = this.name;
    this.categoriasService.update(this.categorias).subscribe(() => {
      this.categoriasService.showMessage('Categoria atualizada com sucesso!');
      this.router.navigate(['/categorias']);
    });
  }

  cancel(): void {
    this.router.navigate(['/categorias']);
  }
}
