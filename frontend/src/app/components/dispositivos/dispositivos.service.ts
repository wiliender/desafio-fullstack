import { Dispositivos } from './dispositivos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  url = 'http://localhost:3000/dispositivos'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  create(dispositivos: Dispositivos): Observable<Dispositivos> {
    return this.http.post<Dispositivos>(this.url, dispositivos)
  }
}
