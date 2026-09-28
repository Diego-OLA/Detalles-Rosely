// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-amber-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg shadow-amber-600/20 max-w-md w-full border border-rose-100">
        <div className="text-6xl mb-4">🌸</div>
        
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          404
        </h1>
        
        <h2 className="text-xl font-bold text-rose-600 mb-4">
          Arreglo o flor no encontrada
        </h2>
        
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Lo sentimos, la flor o el arreglo floral que buscas no existe o fue movido de nuestro catálogo.
        </p>

        <Link
          href="/"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium px-6 py-3 rounded-lg shadow-md shadow-rose-800/30 transition-all duration-200 hover:scale-105"
        >
          Volver al Catálogo Principal
        </Link>
      </div>
    </main>
  );
}