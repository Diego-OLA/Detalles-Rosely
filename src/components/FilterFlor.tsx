"use client"
import { Flor } from "@/types/flor";
import {motion} from "framer-motion"

import {useState} from 'react'

interface FilterFlorProps {
  flores: any[];
  onSelectFlor: (nombreFlor: string) => void; // Callback para el padre
}
export default function FilterFlor ({ flores, onSelectFlor }: FilterFlorProps){

     const [openSelect,setOpenSelect] = useState(false);
     const [selectedFlor,setSelectedFlor] = useState("");
    
    
      const showSelect = ()=>{
        if(openSelect) {
            return
        }
        setOpenSelect(true)

        
      }

      const seleccionado = (flor:any) =>{
        setSelectedFlor(flor)
        onSelectFlor(flor)
        console.log(flor)
        setOpenSelect(false)
      }
    return(
        <div className="mt-20">
    <button className="bg-slate-100 p-2 rounded m-2 shadow-md hover:text-white hover:bg-rose-500 text-rose-600" onClick={showSelect}>Ver tipos</button>

    <div >
        <div  className="bg-rose-400 shadow-sm shadow-rose-800 hover:bg-rose-600">
          
        </div>
        <motion.div
            initial={ false}
            animate={{ 
                opacity: openSelect ? 1 : 0, 
                y: openSelect ? 0 : -20,
                height: openSelect ? "auto" : 0 
                }}
             transition={{ 
                duration: 0.4, 
                ease: "easeOut",
                delay: 0.0 
            }}
             viewport={{ once: false, }} 
        >
              <button onClick={() => seleccionado("Todas")} className="shadow-sm my-0.5 shadow-rose-800 hover:bg-rose-600 bg-rose-400 w-26 text-white">Todas</button>
        {openSelect && ( 
            
         flores.map((f:any)=> (
            
            <div className="shadow-sm m-0.5 shadow-rose-800 hover:bg-rose-600 bg-rose-400" key={f.id}>
                <button className="text-white" onClick={() => seleccionado(f.nombre)}>{f.nombre}</button>
            </div>
        ))

        )
       }
       </motion.div>
    </div>
</div>
    )
}