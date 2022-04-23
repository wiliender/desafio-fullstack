import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositivos-crud',
  templateUrl: './dispositivos-crud.component.html',
  styleUrls: ['./dispositivos-crud.component.css']
})
export class DispositivosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDispositivosCreate(): void {
    this.router.navigate(['/dispositivos/create']);
  }
}