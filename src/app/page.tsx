
import Link from 'next/link'
import {motion} from "framer-motion"
import Hero from '@/components/Hero'; 
import { getArreglosConFlores, getFlores } from '@/lib/queries'
import ArregloCard from '@/components/ArregloCard';
import HomeImage from '@/components/HomeImage';
import { div } from 'framer-motion/client';
import FilterFlor from '@/components/FilterFlor';
import Arreglos from '@/components/Arreglos';
import ArregloForm from '@/components/arregloForm';
import { createClient } from '@/utils/supabase/server';




//export const revalidate = 60; // ISR

export default async function HomePage() {
  const [arreglos, flores] = await Promise.all([
    getArreglosConFlores(),
    getFlores(),
  ]);
   const supabase = await createClient()
      const {
          data: {user}, 
      } = await supabase.auth.getUser()

  

  return (
    <>
      <Hero user={user? user: undefined} />  
      <HomeImage/>
          <ArregloForm flores={flores} user={user? user: undefined}/> 
      {flores.map((f: any) => (
        <div className='m-auto w-11/12'>
          <div className='flex justify-start hover:bg-rose-600 bg-rose-400'> 
        <Link key={f.id} href={`/flores/${f.slug}`}>
          {f.nombre}
        </Link>
         </div>
        </div>
      ))}
      
      <Arreglos arreglos={arreglos} flores={flores} />

   
    </>
  );
}