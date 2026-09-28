"use client"
import {useState} from "react"
import FilterFlor from "@/components/FilterFlor"
import ArregloCard from "@/components/ArregloCard"

interface ArreglosFloresProp {
    flores:any[];
    arreglos:any[];
}

export default function({flores,arreglos}: ArreglosFloresProp){
    const [florFiltro, setFlorFiltro] = useState<string>("Todas");
 // Filtramos la lista de arreglos según lo seleccionado
    

  const arreglosFiltrados = florFiltro === "Todas"
    ? arreglos
    : arreglos.filter((arreglo:any) => 
        arreglo.flores?.some((f: any) => f.nombre === florFiltro)
      );

 return(
    <>   
     <div className='flex justify-items-center mx-auto p-4 '>
      { /* <select className='bg-rose-400 p-1 active:bg-rose-700  border-0 rounded-md '>
          <option className='bg-rose-400 ' value="todas">Todas</option>
            {flores.map((f:any) => (
        <div>
            
            <option className='bg-rose-400' value={f.id}>{f.nombre}</option>
          
          </div>
      ))}
        </select> */}

        <FilterFlor flores={flores} onSelectFlor={(nombre) => setFlorFiltro(nombre)}/>      
      </div>
      <div className='my-20  mx-auto min-w-1/2   '>
      <div className='
             grid grid-cols-1 gap-10  w-full justify-items-center  md:grid-cols-2 '>
      {arreglosFiltrados.map((a: any, index:number) => (
       
        <ArregloCard key={a.arreglo_id} arreglo={a} />
        
      ))}
      
     </div>
      </div>
    </>

 )
}