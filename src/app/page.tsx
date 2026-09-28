
import Link from 'next/link'
import {motion} from "framer-motion"
import Hero from '@/components/Hero'; 
import { getArreglosConFlores, getFlores } from '@/lib/queries'
import ArregloCard from '@/components/ArregloCard';
import HomeImage from '@/components/HomeImage';
import { div } from 'framer-motion/client';
import FilterFlor from '@/components/FilterFlor';
import Arreglos from '@/components/Arreglos';



//export const revalidate = 60; // ISR

export default async function HomePage() {
  const [arreglos, flores] = await Promise.all([
    getArreglosConFlores(),
    getFlores(),
  ]);

  

  return (
    <>
      <Hero />  
      <HomeImage/>
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