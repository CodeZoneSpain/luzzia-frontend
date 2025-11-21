'use client'

import { useEffect } from 'react'
import { useChartData } from '@/hooks/useElectricityDataContext'
import { useInView } from '@/hooks/useInView'
import { PriceChart } from './PriceChart'

export default function LazyPriceChart() {
  const { ref, inView } = useInView({ 
    threshold: 0.1, 
    rootMargin: '100px',
    triggerOnce: true 
  })
  
  const { 
    todayPrices, 
    isLoading, 
    loadToday,
    lastUpdated 
  } = useChartData()

  // Cargar datos solo cuando entra en viewport
  useEffect(() => {
    if (inView && todayPrices.length === 0 && !isLoading && !lastUpdated) {
      loadToday()
    }
  }, [inView, todayPrices.length, isLoading, lastUpdated, loadToday])

  return (
    <div ref={ref}>
      {inView ? (
        <PriceChart />
      ) : (
        <div className="flex items-center justify-center bg-slate-800/50 rounded-lg border border-slate-700/50">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-slate-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-slate-400 text-sm">Preparando gráfico...</p>
          </div>
        </div>
      )}
    </div>
  )
}