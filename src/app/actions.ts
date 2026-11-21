// app/actions.ts
'use server';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { guardarArreglo, guardarArregloFlores } from "@/lib/queries";
import { createClient } from '@/utils/supabase/server'

export type EstadoFormulario = {
  error?: string;
  mensaje?: string;
};

export async function loginConEmail(email: string, password: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Error al iniciar sesión:', error.message)
    return null
  }

  return data // Contiene { user, session }
}
export async function Login(formData:FormData){

    const data = {
        email: formData.get("email") as string,
        password: formData.get("pass") as string
    }

    const res = await loginConEmail(data.email,data.password)
    console.log(res)
    if (res === null) {
        
    redirect(`/login?error=${encodeURIComponent('error')}`)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}


export async function signout() {
  
    const sup = await createClient()
    const {error} = await sup.auth.signOut();

    if (error){
         console.error('Error al cerrar sesión:', error.message);
        return;
    }

    
    revalidatePath('/', 'layout')
    redirect('/sign-in')
}

export async function nuevoArreglo(formData: FormData) {
 // const arregloId = formData.get('arregloId');
 
  const descripcionArreglo = formData.get('descripcion');
  const floresId = formData.get('floresId');
  const imgUrl = formData.get('imgUrl');
  

  const res = await guardarArreglo({
    "descripcion":String(descripcionArreglo),
    "imagen_url": String(imgUrl)
  })

 console.log(res)
  if (res){
    const arrId = res[0].id
    const arrConFloresRes = await guardarArregloFlores({
        "arreglo_id":arrId? arrId : 0,
        "flores" : ["1","2"]
    })
  }

 
}