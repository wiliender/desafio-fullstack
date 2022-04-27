import { Categorias } from './../categorias/categorias.model';
export interface Dispositivos {
    id?: number;
    Categoria: Categorias;
    color: string;
    partNumber: number;
}