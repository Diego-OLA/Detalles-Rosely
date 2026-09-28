import { Flor } from "./flor";
export interface Arreglo{
    id:number;
    descripcion:string;
    imagen_url?:string;
    tipos_flores: ArregloFlorRelacion[];
}

export interface ArregloFlorRelacion {
  cantidad: number;
  flor: Flor;
}