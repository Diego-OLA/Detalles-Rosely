import { Flor } from "./flor";

export interface Arreglo{
    id?:number;
    descripcion:string;
    precio:number;
    imagen_url:string;
    tipos_flores?: ArregloFlores[];
}

export interface ArregloFlores{
  id?:number;
  arreglo_id:number
  flores: string[]
}



export interface ArregloFlorRelacion {
  cantidad: number;
  flor: Flor;
}