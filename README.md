# Flores App

Aplicación web desarrollada con Next.js para mostrar arreglos florales, filtrar por tipo de flor y ver el detalle de cada arreglo.
El nombre del repo se debe a que esta basado en un negocio real y para obtener de vercel una URL más decente y poder presentar el sitio le coloque ese nombre
## Descripción del proyecto

Flores App es un catálogo visual de arreglos florales que permite:

- Explorar arreglos disponibles.
- Filtrar por tipo de flor.
- Ver detalles de cada arreglo.
- Mostrar contenido dinámico desde Supabase.
- Diseñar una experiencia visual con Tailwind CSS y Framer Motion.

## Stack tecnológico

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion

## Requisitos previos

- Node.js 18 o superior
- npm o pnpm
- Cuenta y proyecto en Supabase

## Instalación local

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd flores-app
```

2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto:

```bash
copy .env.example .env.local
```

4. Completa las variables de entorno necesarias.

5. Inicia la aplicación en modo desarrollo:

```bash
npm run dev
```

6. Abre la aplicación en tu navegador:

```bash
http://localhost:3000
```

## Variables de entorno

Crea un archivo `.env.local` con valores reales de tu proyecto Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key

```



## Scripts disponibles

```bash
npm run dev
npm run build
npm run start

```

## Estructura principal

```bash
src/
  app/
  components/
  lib/
  types/
```

## Notas

- La app usa Supabase para consultar flores y arreglos.
- El filtrado se realiza en el cliente para mostrar los arreglos según la flor seleccionada.
- Las rutas dinámicas de detalle dependen de los IDs disponibles en la base de datos.

## Licencia

Este proyecto se entrega con fines educativos y de desarrollo local.
