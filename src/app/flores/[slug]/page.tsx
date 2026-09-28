
import Link from 'next/link'
import { notFound } from 'next/navigation';
import ArregloCard from '@/components/ArregloCard';
import {
  getFlores,
  getFloresBySlug,
  getArreglosByFlorId,
} from '@/lib/queries';

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

// Genera las rutas estáticas en build time según los slugs de las flores
export async function generateStaticParams() {
  const flores = await getFlores();
  
  if (!flores) return [];

  return flores.map((f: { slug: string }) => ({
    slug: f.slug,
  }));
}

export default async function FlorDetailPage({ params }: Props) {
  const { slug } = await params;

  //Obtenemos la información de la flor por su slug
  const flor = await getFloresBySlug(slug);

  // Si no se encuentra la flor, redirige automáticamente a la página 404
  if (!flor) {
    notFound();
  }

  // Obtenemos los arreglos florales que contienen esta flor
  const arreglos = await getArreglosByFlorId(flor.id);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado con detalles de la flor seleccionada */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 capitalize mb-2">
            Arreglos con {flor.nombre}
          </h1>
       
        </header>

        {/* Muestra del catálogo filtrado */}
        {arreglos && arreglos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            
            {arreglos.map((arreglo: any) => (
            <Link key={arreglo.arreglo_id} href={`/arreglos/${arreglo.arreglo_id}`}>
              <ArregloCard key={arreglo.id} arreglo={arreglo} />
              </Link>
            ))}

          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No se encontraron arreglos disponibles para esta flor actualmente.
          </div>
        )}
      </div>
    </main>
  );
}