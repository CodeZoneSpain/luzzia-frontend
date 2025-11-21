import { useState, useEffect, useCallback, useRef } from 'react'
import { STARTUP_BANNER_CONFIG } from '@/config/startup-banner.config'

interface UseStartupBannerReturn {
  isVisible: boolean
  currentStat: number
  handleClose: () => void
  prefersReducedMotion: boolean
  wasDismissedBefore: boolean
}

export function useStartupBanner(): UseStartupBannerReturn {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)
  const [wasDismissedBefore, setWasDismissedBefore] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Refs para evitar memory leaks y closures innecesarias
  const showTimerRef = useRef<NodeJS.Timeout | null>(null)
  const statTimerRef = useRef<NodeJS.Timeout | null>(null)
  const mediaQueryRef = useRef<MediaQueryList | null>(null)
  const isInitializedRef = useRef(false)

  // Inicializar banner - Effect 1: Check localStorage y media queries
  useEffect(() => {
    // Evitar ejecutar dos veces en StrictMode
    if (isInitializedRef.current) return
    isInitializedRef.current = true

    if (typeof window !== 'undefined') {
      // Verificar si fue dismissido antes
      const isDismissed = localStorage.getItem(STARTUP_BANNER_CONFIG.STORAGE_KEY)
      setWasDismissedBefore(!!isDismissed)

      if (isDismissed) return

      // Verificar preferencia de movimiento reducido
      if (STARTUP_BANNER_CONFIG.RESPECT_PREFERS_REDUCED_MOTION) {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReducedMotion(mediaQuery.matches)
        mediaQueryRef.current = mediaQuery

        const handleChange = (e: MediaQueryListEvent) => {
          setPrefersReducedMotion(e.matches)
        }

        // Usar addEventListener en lugar de addListener (deprecado)
        mediaQuery.addEventListener('change', handleChange)
        
        return () => {
          mediaQuery.removeEventListener('change', handleChange)
        }
      }
    }
  }, []) // Solo ejecutar una vez

  // Mostrar banner y rotar estadísticas - Effect 2: Setup timers
  useEffect(() => {
    if (wasDismissedBefore) return

    // Mostrar banner después del delay
    showTimerRef.current = setTimeout(() => {
      setIsVisible(true)

      // Iniciar rotación de estadísticas
      if (STARTUP_BANNER_CONFIG.ENABLE_STATS_ROTATION) {
        statTimerRef.current = setInterval(() => {
          setCurrentStat(prev => (prev + 1) % 4) // 4 stats en config
        }, STARTUP_BANNER_CONFIG.STATS_ROTATION_INTERVAL)
      }
    }, STARTUP_BANNER_CONFIG.SHOW_DELAY)

    // Cleanup de timers
    return () => {
      if (showTimerRef.current) {
        clearTimeout(showTimerRef.current)
        showTimerRef.current = null
      }
      if (statTimerRef.current) {
        clearInterval(statTimerRef.current)
        statTimerRef.current = null
      }
    }
  }, [wasDismissedBefore])

  // Manejar cierre del banner
  const handleClose = useCallback(() => {
    setIsVisible(false)
    setWasDismissedBefore(true)
    localStorage.setItem(STARTUP_BANNER_CONFIG.STORAGE_KEY, 'true')

    // Enviar evento de analytics si está habilitado
    if (STARTUP_BANNER_CONFIG.TRACK_DISMISSALS && typeof window !== 'undefined') {
      // Aquí puedes integrar con tu sistema de analytics
      // gtag?.('event', 'startup_banner_dismissed')
    }
  }, [])

  return {
    isVisible,
    currentStat,
    handleClose,
    prefersReducedMotion,
    wasDismissedBefore,
  }
}
