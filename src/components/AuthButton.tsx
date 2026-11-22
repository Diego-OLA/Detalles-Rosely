import { signout } from "@/app/actions";
import { UserSimple } from "@/types/auth";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";
import Link from "next/link";

interface userProps {
    user:User | undefined

}

export  default async function AuthButton({user}:userProps){

    if(!user){
        return(
            <>
            <div className="bg-rose-300 p-2 rounded font-bold text-white  hover:bg-rose-500 ">
            <Link  href="/sign-in">Iniciar Sesión</Link>
            </div>
            </>
        )
    }

    return(
        <>
        
        <form action={signout}>
          <button type="submit" className="bg-red-700 hover:bg-red-900 p-2 font-bold text-white">Cerrar Sesión</button>
        </form>

        </>
    )
}