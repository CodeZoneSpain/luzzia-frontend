'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { ComponentType } from 'react'

// Lazy load del componente StartupBanner
const StartupBanner = dynamic(
  () => import('@/components/marketing/StartupBanner').then(mod => ({ 
    default: mod.StartupBanner 
  })),
  { 
    ssr: false, // No renderizar en servidor (usa window)
    loading: () => null, // Sin loading UI para evitar layout shift
  }
) as ComponentType

/**
 * Componente de error fallback
 * Renderiza nada para no afectar UX si hay error
 */
function ErrorFallback() {
  return null
}

/**
 * Cliente para StartupBanner con error boundary
 * Esta separación permite que fallos en el banner no afecten la app
 */
export default function ClientStartupBanner() {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <StartupBanner />
      </ErrorBoundary>
    </Suspense>
  )
}

/**
 * Error Boundary simple para capturar errores del componente
 */
function ErrorBoundary({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode
  fallback: React.ReactNode
}) {
  try {
    return <>{children}</>
  } catch (error) {
    // Log del error en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.error('Error en ClientStartupBanner:', error)
    }
    
    // Retornar fallback sin romper la app
    return <>{fallback}</>
  }
}