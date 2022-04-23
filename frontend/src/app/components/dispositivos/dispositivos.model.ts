import { Categoria } from './../categorias/categorias.model';
export interface Dispositivos {
    id: number;
    Categoria: Categoria;
    color: string;
    partNumber: number;
}