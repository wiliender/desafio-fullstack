import { Dispositivos } from './../dispositivos.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DispositivosService } from './../dispositivos.service';

@Component({
  selector: 'app-dispositivos-delete',
  templateUrl: './dispositivos-delete.component.html',
  styleUrls: ['./dispositivos-delete.component.css']
})
export class DispositivosDeleteComponent implements OnInit {


  dispositivos: any = {
    categorias: {
    },
    color: '',
    partNumber: '',
  }
  categorias: any;

  constructor(private dispositivosService: DispositivosService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      throw Error
    }
    this.dispositivosService.readById(id).subscribe(dispositivos => {
      this.dispositivos = dispositivos;
    })
  }

  deleteDispositivos(): void {
    if (this.dispositivos.id != null) {
      this.dispositivosService.delete(this.dispositivos.id).subscribe(() => {
        this.dispositivosService.showMessage('Dispositivo excluido com sucesso!')
        this.router.navigate(['/dispositivos'])
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/dispositivos'])
  }

}
