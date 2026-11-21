import { cache } from "react";
import { supabase } from "./supabase";
import { Arreglo, ArregloFlores } from "@/types/arreglo";
import { loginForm } from "@/types/auth";

export async function getFlores()  {
  const { data, error } = await supabase
    .from('flores')
    .select('*')
  
  if (error) {
    console.error('Error al obtener flores:', error)
    return []
  }

  console.log(data)

  return data
}
export async function getFloresBySlug(slug: string) {
  const { data, error } = await supabase
    .from('flores')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    console.error('Error al obtener la flor:', error)
    return null
  }

  return data
}

export async function getArreglosByFlorId(florId: string | number) {
  const { data, error } = await supabase
    .from('vista_arreglos_con_flores')
    .select('*')
    // Supabase permite filtrar si el array de JSON contiene un objeto con esa flor
    .contains('flores', JSON.stringify([{ id: florId }]));

  if (error) {
    console.error('Error al obtener arreglos desde la vista:', error);
    return [];
  }

  return data || [];
}

export async function getArreglosById(id: number) {
  const { data, error } = await supabase
    .from('vista_arreglos_con_flores')
    .select('*')
    .eq('arreglo_id',id)
    .maybeSingle()
  
  if (error) {
    console.error('Error al obtener arreglos', error)
    return 
  }

  return data
}


export async function getArreglosConFlores() {
  const { data, error } = await supabase
    .from('vista_arreglos_con_flores')
    .select('*')
  
  if (error) {
    console.error('Error al obtener arreglos con flores asociadas:', error)
    return []
  }
console.log(data)
  return data
}

export async function guardarArreglo(arreglo:Arreglo){
  const {data,error} = await supabase
  .from('arreglos')
  .insert({
    "descripcion":arreglo.descripcion,
    "imagen_url": arreglo.imagen_url
  })
  .select("*");


  if(error){
    console.error("Error al insertar arreglo: ", error)

  }
    return data as Arreglo[];
  
}



export async function guardarArregloFlores(arr:ArregloFlores){

  const arregloFlores =arr.flores.map((florId)=>({
    arreglo_id:arr.arreglo_id,
    flor_id:florId
  }))

  const {data,error} = await supabase
  .from('arreglo_flores')
  .insert(arregloFlores)
  .select("*")

  if(error){
    console.error("Error al relacionar arreglos con flores: ", error)

  }
  return data as ArregloFlores[]
}