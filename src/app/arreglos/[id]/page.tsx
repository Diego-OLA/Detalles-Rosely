import { notFound } from "next/navigation";
import ArregloCard from "@/components/ArregloCard";
import { getArreglosById, getArreglosConFlores } from "@/lib/queries";
import Hero from "@/components/Hero";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const arreglos = await getArreglosConFlores();

  if (!arreglos) return [];

  return arreglos.map((a: any) => {
    const id = a.arreglo_id ?? a.id;
    return { id: String(id) };
  });
}

export default async function ArregloDetallePage({ params }: Props) {
  const { id } = await params;
  const arreglo = await getArreglosById(Number(id));

  if (!arreglo) {
    notFound();
  }

  return (
    <>
      <Hero />
      <div className="min-h-screen bg-rose-100 py-10 px-4">
        <div className="max-w-7xl py-20">
          
           
          <ArregloCard arreglo={arreglo} key={arreglo.arreglo_id ?? arreglo.id} />

         <div className="h-full">
         
        </div>
        </div>
      </div>
    </>
  );
}