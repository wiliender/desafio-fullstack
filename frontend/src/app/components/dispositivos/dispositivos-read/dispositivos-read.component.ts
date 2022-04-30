import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriasService } from '../../categorias/categorias.service';
import { Dispositivos } from './../dispositivos.model';
import { DispositivosService } from './../dispositivos.service';

@Component({
  selector: 'app-dispositivos-read',
  templateUrl: './dispositivos-read.component.html',
  styleUrls: ['./dispositivos-read.component.css']
})
export class DispositivosReadComponent implements OnInit {

  dispositivos!: Dispositivos[];
   
  displayedColumns: string[] = ['id', 'color', 'partNumber', 'categoria', 'action'];
  

  categorias: any;
  constructor(private dispositivosService: DispositivosService, private router: Router, private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.dispositivosService.read().subscribe(dispositivos => {
      this.dispositivos = dispositivos
      console.log(dispositivos)
    })
  }
}
