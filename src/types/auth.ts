import { User,Session,WeakPassword } from "@supabase/supabase-js";


export interface loginForm {
    email:string;
    password:string;
}

export interface resLogin {
    user:User;
    session:Session;
    weakPassword?:WeakPassword | undefined;

}
export interface UserSimple {
    id:number;
    email:string
}
