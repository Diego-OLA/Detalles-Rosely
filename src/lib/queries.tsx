import { cache } from "react";
import { supabase } from "./supabase";

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