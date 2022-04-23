import { DispositivosService } from './../dispositivos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositivos-create',
  templateUrl: './dispositivos-create.component.html',
  styleUrls: ['./dispositivos-create.component.css']
})
export class DispositivosCreateComponent implements OnInit {

  constructor(private dispositivosService: DispositivosService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createDispositivos(): void {
    this.dispositivosService.showMessage('Dispositivo criado com sucesso!')
  }
  cancel(): void {
    this.router.navigate(['/dispositivos'])
  }
}
