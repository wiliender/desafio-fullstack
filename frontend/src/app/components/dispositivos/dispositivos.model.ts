import { Categorias } from './../categorias/categorias.model';
export interface Dispositivos {
    id?: number;
    categoria_id: Categorias;
    color: string;
    partNumber: number;
}