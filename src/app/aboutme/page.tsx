import { GradientTextStyles } from '@/components/ui/gradientText'
import { CalculatorIcon, PiggyBankIcon, ZapIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Qué es Luzzia? - Tu Aliado Inteligente para el Ahorro Energético',
  description: 'Descubre cómo Luzzia te ayuda a reducir tu factura eléctrica hasta un 30% con análisis inteligente de precios de luz, recomendaciones personalizadas y alertas en tiempo real.',
  keywords: ['ahorro energético', 'precio luz', 'factura eléctrica', 'smart home', 'eficiencia energética', 'tarifa eléctrica'],
  openGraph: {
    title: '¿Qué es Luzzia? - Ahorra hasta 30% en tu factura de luz',
    description: 'Revoluciona tu consumo eléctrico con Luzzia. Análisis inteligente, alertas en tiempo real y recomendaciones que te harán ahorrar.',
    type: 'website',
  },
}

export default function AboutMePage() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          ¿Qué es <span className={`${GradientTextStyles}`}>Luzzia</span>?
        </h1>
        <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Tu compañero inteligente para <strong className="text-[#03faae]">reducir tu factura eléctrica hasta un 30% </strong>
          sin cambiar tu estilo de vida.
        </p>
      </section>

      {/* Problema y Solución */}
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            El Problema que <span className="text-red-400">Todos</span> Enfrentamos
          </h2>
          <div className="space-y-4 text-lg text-slate-300">
            <p>🔥 Los precios de la luz cambian cada hora y pocos saben cuándo es más barata la electricidad</p>
            <p>💸 Usas tus electrodomésticos en las horas más caras sin darte cuenta</p>
            <p>😵 Tu factura eléctrica aumenta mes tras mes</p>
            <p>🤷‍♀️ No sabes a qué hora es más barato usar la lavadora o cargar el coche eléctrico</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">La Solución: Luzzia</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Analiza los precios de la electricidad en España y te envía alertas automáticas con el mejor momento para consumir:
          </p>
          <p className="font-bold leading-relaxed mt-4">
            "¡Ahora es la hora más barata para poner la lavadora!" o “¡Espera 2 horas para ahorrar un 25% en tu carga eléctrica!”.
          </p>
          <p className="font-bold leading-relaxed mt-4">
            Así puedes reducir tu factura de luz hasta un 30% sin cambiar tu estilo de vida.
          </p>
          <p className="font-bold leading-relaxed mt-4">
            Luzzia analiza los precios de la electricidad en España y te envía alertas automáticas con el mejor momento para consumir
          </p>
        </div>
      </section>

      {/* Características Principales */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          ¿Cómo <span className={`${GradientTextStyles}`}>Luzzia</span> te ayuda a ahorrar en tu factura eléctrica?
        </h2>
        <div className="grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <ZapIcon className="w-7 h-7 text-emerald-500" />,
              title: "Precios en Tiempo Real",
              description: "Consulta el precio de la electricidad hoy por horas con datos oficiales de REE. Descubre en qué momento la luz es más barata y paga menos por cada kWh."
            },
            {
              icon: <CalculatorIcon className="w-7 h-7 text-emerald-500" />,
              title: "Alertas Inteligentes",
              description: "Recibe notificaciones cuando el precio de la luz baja. Programa tus electrodomésticos y reduce tu consumo eléctrico sin esfuerzo a la hora justa."
            },
            {
              icon: <PiggyBankIcon className="w-7 h-7 text-emerald-500" />,
              title: "Calculadora de Ahorro",
              description: "Comprueba cuánto podrías reducir tu factura eléctrica cambiando tus hábitos según el precio del kWh hoy. Ahorra hasta un 30% fácilmente."
            },

          ].map((feature, index) => (
            <div key={`feature-how-${index}`}
              className="flex flex-col items-center p-6 justify-between text-center bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              aria-label={typeof feature.title === 'string' ? feature.title : undefined}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-slate-800 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Casos de Uso Reales */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Casos Reales de <span className="text-green-400">Ahorro</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-8 rounded-2xl border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">👨‍👩‍👧‍👦 Familia García</h3>
            <p className="text-slate-300 mb-4">
              Usaron Luzzia para programar lavadora y lavavajillas en las horas más baratas de luz.
            </p>
            <div className="text-2xl font-bold text-green-400">Ahorro: -28% en su factura eléctrica</div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">🚗 Carlos (Coche Eléctrico)</h3>
            <p className="text-slate-300 mb-4">
              Carga su vehículo solo cuando el precio de la electricidad por kWh está más bajo.
            </p>
            <div className="text-2xl font-bold text-blue-400">Ahorro: -35% en consumo eléctrico.</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">🏢 Pyme Innovadora</h3>
            <p className="text-slate-300 mb-4">
              Ajustó los horarios de sus equipos según los precios de la luz por horas.
            </p>
            <div className="text-2xl font-bold text-purple-400">Ahorro: -22% en costes energéticos.</div>
          </div>
        </div>
      </section>

      {/* Visión de Futuro */}
      <section className="text-center mb-16">
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-12 rounded-3xl border border-blue-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Nuestra <span className="text-blue-400">Visión</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Creemos en un futuro donde cada hogar español pueda controlar su gasto eléctrico con datos en tiempo real.
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Donde la tecnología ayude a reducir la factura de la luz y el ahorro energético sea tan simple como recibir una alerta.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">100k+</div>
              <div className="text-slate-300">Hogares Impactados (Meta 2025)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">€2M+</div>
              <div className="text-slate-300">Ahorrados Colectivamente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50%</div>
              <div className="text-slate-300">Reducción de Huella de Carbono</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          ¿Listo para empezar a<span className="text-green-400"> Ahorrar luz hoy</span>?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Únete gratis a miles de personas que ya consultan el precio de la electricidad por horas y reducen su factura eléctrica con Luzzia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            📧 Suscríbete al Newsletter
          </Link>
          <Link
            href="/"
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl border border-slate-600 transition-all duration-300"
          >
            📊 Ver Precios en Vivo
          </Link>
        </div>
      </section>
    </div>
    // </div>
  )
}