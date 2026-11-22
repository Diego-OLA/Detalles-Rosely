"use client"
import { nuevoArreglo } from "@/app/actions";
import { getFlores } from "@/lib/queries";
import { Arreglo } from "@/types/arreglo";
import { UserSimple } from "@/types/auth";
import { Flor } from "@/types/flor";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

interface ArregloProps {
    flores:Flor[]
    user?: User | undefined
} 


export default function ArregloForm({flores,user}:ArregloProps){

    if (!user){
        return
    }
    const [imgUrl,setImgUrl]= useState<string | null>('')
   

    return(
        <>
        <div className="m-4 flex flex-col items-center place-self-center  bg-rose-400  w-60 md:w-1/2 sm:w-1/3  rounded p-2">
        <form action={nuevoArreglo}>
            <div className="bg-red-100 p-2 rounded flex flex-col">
            <input className=" w-full md:w-md m-1 p-1 border-rose-500 border-2 rounded" name="descripcion" type="text" placeholder="Descripcion del arreglo" required />
            <input className=" w-full md:w-md m-1 p-1 border-rose-500 border-2 rounded" name="precio" type="number" placeholder="precio" max={100} min={5} required />
            <input className="w-full md:w-md m-1 p-1  border-rose-500 border-2 rounded"
              name="imgUrl" type="text" placeholder="Url de la imagen" required  onChange={(t) =>{setImgUrl(t.target.value)}} />
            <img className="h-48 object-cover" src={imgUrl? imgUrl : undefined} alt="" />

             <fieldset className="mt-1">
            <legend className="text-sm font-semibold text-gray-800 mb-1">
              Selecciona las flores:
            </legend>
            <div className="max-h-40  flex flex-col gap-1.5 bg-white p-2 rounded border border-red-200">
              {flores.map((f: Flor) => (
                <label
                  key={f.id}
                  className="flex items-center gap-2 cursor-pointer hover:bg-rose-50 p-1 rounded"
                >
                  <input
                    type="checkbox"
                    name="floresId"
                    value={f.id}
                    className="accent-rose-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-800">{f.nombre}</span>
                </label>
              ))}
            </div>
          </fieldset>

             </div>
            <button className="bg-red-100 p-2 rounded my-2 mx-auto hover:bg-red-300 font-bold " type="submit">Guardar Arreglo</button>
           
        </form>
        </div>
        
        </>
    )

}