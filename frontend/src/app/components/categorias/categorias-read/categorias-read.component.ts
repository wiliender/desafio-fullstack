import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { Categorias } from '../categorias.model';

@Component({
  selector: 'app-categorias-read',
  templateUrl: './categorias-read.component.html',
  styleUrls: ['./categorias-read.component.css']
})
export class CategoriasReadComponent implements OnInit {

  categorias!: Categorias[];
  displayedColumns = ['id', 'name']

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.read().subscribe(categorias => {
      this.categorias = categorias
      console.log(categorias)
    })
  }

}
