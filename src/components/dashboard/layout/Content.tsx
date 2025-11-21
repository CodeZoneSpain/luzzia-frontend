
import { use } from 'react';
import { electricityService } from '@/services/electricityService';
import Hero from './Hero';
import { TrendingUp } from 'lucide-react';

import DashboardContentClient from './DashboardContentClient';
import PriceChartClientWrapper from '../charts/PriceChartClientWrapper';

import { ContentCard } from '../cards/ContentCard';


export function DashboardContent() {
  // Fetch de datos críticos en Server Component usando use
  const stats = use(electricityService.getDashboardStats());

  return (
    // <div className=" bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <div className="container min-h-screen mx-auto p-2 md:p-4 md:mt-8">
      {/* Hero Section - Siempre visible, datos opcionales */}
      <Hero stats={stats} />

      {/* Value Proposition Section - Cards estilo ¿Qué es Luzzia? */}
      <ContentCard />

      {/* Price Chart Section - Card estilo ¿Qué es Luzzia? */}
      <section className="mb-20">
        <div className="text-center mb-10 w-[90%] md:w-full mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Precio de la luz hoy por horas
          </h2>
          <p>(en tiempo real)</p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Datos oficiales de OMIE y Red Eléctrica de España (REE). Consulta el precio del kWh hoy y aprovecha las horas más baratas para tus 
          </p>
        </div>
        <PriceChartClientWrapper />
      </section>

      {/* Newsletter Section - Progressive Loading (Client Component) */}
      <DashboardContentClient />
    </div>
    // </div>
  );
}
