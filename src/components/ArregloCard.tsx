'use client'; // 👈 Agrega esto justo en la primera línea
import Image from "next/image";
import {motion} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function ({arreglo}: {arreglo:any}){
      return (
         <motion.div
      key={arreglo.arreglo_id}
      className="w-full flex justify-center"
      // Estado inicial (oculto y abajo)
      initial={{ opacity: 0, y: 30 }}
      // Estado cuando entra en el viewport (pantalla)
      whileInView={{ opacity: 1, y: 0 }}
      // Controla la animación (duración y efecto cascada opcional)
      transition={{ 
        duration: 0.4, 
        ease: "easeOut",
        delay: 0.5 // Pequeño desfase entre columnas
      }}
      // Asegura que la animación ocurra solo la primera vez que se ve
      viewport={{ once: false, }} 
      > 
    <div className="animate-fade-in-up w-1/2 flex justify-center  m-1 bg-red-100">
    <div className="w-auto  bg-red-100   p-4 rounded-lg shadow-md shadow-red-600">
        {/*rederizado condicional*/
        arreglo.imagen_url && (
            <div className="relative w-75 h-78 mb-3 overflow-hidden rounded-sm">
                <Image
                    src={arreglo.imagen_url}
                    alt={arreglo.descripcion || 'Imagen del arreglo'}
                    fill
                    className="object-cover"
                    sizes="(max-width:769px)  20vw, (max-width: 1200px) 50vw, 33vw"

                />

                
            </div>
        )
        }
      <h3 className="font-bold text-lg">{arreglo.descripcion}</h3>
      
      {arreglo.flores.map((a:any)=>(
        <span key={a.id} className="bg-rose-400 w-25 rounded m-1 p-1 text-sm font-black text-white">{a.nombre}</span>
      ))}

     <div className="flex justify-between mt-4.5">
        <div>
         <a
          href="https://wa.me/50370073010"
          target="_blank"
          rel="noopener noreferrer"
        >
       
  
        <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: "rgb(241, 13, 195)", fontSize: "30px" }}
          />
        </a>
         </div>
         <div>
             <span className="text-5xl text-rose-500 font-bold">${arreglo.precio}</span>
          </div>
     </div>
     
    </div>
    </div>
    </motion.div>
  );
}