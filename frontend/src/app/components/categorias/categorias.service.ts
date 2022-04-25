import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Categorias } from './categorias.model'

//const url = 'http://localhost:3000/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = 'http://localhost:3000/categorias'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  create(categorias: Categorias): Observable<Categorias> {
    return this.http.post<Categorias>(this.url, categorias)
  }

  read(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.url)
  }
}

