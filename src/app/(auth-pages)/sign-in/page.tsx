import { Login } from "@/app/actions";


export default function SignIn(){

return(
    <>
    <form action={Login}>
        <div className="bg-red-300 flex flex-col justify-center place-self-center w-1/3 gap-3 rounded my-20">
        <div className="place-items-center flex flex-col gap-5 m-5">
            <h1 className="text-white font-bold text-3xl">Iniciar Sesión</h1>
            <div>
                <input className="bg-rose-100 p-1 rounded" name="email" type="text" placeholder="Email" required />
            </div>
            <div>
                <input className="bg-rose-100 p-1 rounded" name="pass" type="password" required placeholder="1234567" />
            </div>
            <div>
                <button type="submit" className="font-semibold text-white bg-red-400 p-2 rounded" >Iniciar Sesión</button>
            </div>
        </div>
        </div>

    </form>
    </>
)

}