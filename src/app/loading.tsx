// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-rose-300 flex flex-col items-center justify-center p-4">
      {/* Spinner floral animado */}
      <div className="w-10 h-10 border-4 border-rose-300 border-t-rose-600 rounded-full animate-spin mb-3"></div>
      
      {/* Texto de carga */}
      <p className="text-rose-800 font-semibold text-sm tracking-wide animate-pulse">
        Cargando flores...
      </p>
    </div>
  );
}