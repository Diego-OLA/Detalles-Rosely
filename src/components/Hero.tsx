import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import AuthButton from "./AuthButton";
import { User } from "@supabase/supabase-js";

interface userProp {
  user:User | undefined
}

export default function Hero({user}:userProp) {
  return (
    <>
  
    <header className="p-1 md:p-4 w-full absolute z-10 text-center bg-stone-900 opacity-50  ">
      <div className="flex flex-col-reverse sm:flex-row ">
        <AuthButton user={user}/>   
      <div className="flex flex-col  mx-auto">
      <h1 className=" md:text-3xl  font-bold text-white">FLORES NATURALES Y ETERNAS</h1>
      </div>
       <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3  ">
      
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
          href="https://www.instagram.com/roselymenjivar/"
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