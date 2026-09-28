import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
export default function Hero() {
  return (
    <>
  
    <header className="p-1 md:p-4 w-full absolute z-10 text-center bg-stone-900 opacity-50  ">
      <div className="flex ">
     <div className="flex flex-col mx-auto">
      <h1 className=" md:text-3xl  font-bold text-white">FLORES NATURALES Y ETERNAS</h1>
      <p className="text-orange-100"></p>
      </div>
       <div className="  ">
      
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
     <a
      href="https://instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
    
  
     <FontAwesomeIcon
        icon={faInstagram}
        style={{ color: "rgb(241, 13, 195)", fontSize: "30px" }}
      />
    </a>
    </div>
    </div>
    </header>
    </>
  );
}