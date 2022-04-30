import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriasService } from './../../categorias/categorias.service';
import { DispositivosService } from './../dispositivos.service';

@Component({
  selector: 'app-dispositivos-create',
  templateUrl: './dispositivos-create.component.html',
  styleUrls: ['./dispositivos-create.component.css']
})
export class DispositivosCreateComponent implements OnInit {

  dispositivos: any = {
    categorias: {
    },
    color: '',
    partNumber: '',
  }
  categorias: any;
  constructor(private dispositivosService: DispositivosService, private router: Router, private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.read().subscribe(categorias => {
      this.categorias = categorias
      console.log(categorias)
    })
  }
  
  createDispositivos(): void {
    this.dispositivosService.create(this.dispositivos).subscribe(() => {
      this.dispositivosService.showMessage('Dispositivo criado com sucesso!')
      this.router.navigate(['/dispositivos'])
    })
    console.log(this.dispositivos)
  }
  cancel(): void {
    this.router.navigate(['/dispositivos'])
  }
  adicionarCateogira(categoria: any): void {
    this.dispositivos.categorias = categoria
    //this.categoriasService.update(categoria).subscribe()
  }
}
