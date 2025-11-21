'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Euro,
  Clock,
  Shield,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useStartupBanner } from '@/hooks/useStartupBanner'
import { STARTUP_BANNER_CONFIG, STARTUP_BANNER_STATS } from '@/config/startup-banner.config'

/**
 * Mapeo seguro de iconos para evitar inyección maliciosa
 */
const ICON_MAP: Record<string, React.ComponentType<{ className: string }>> = {
  Users,
  Euro,
  Clock,
  Shield,
} as const

interface StartupBannerProps {
  onClose?: () => void
  className?: string
  /** Permitir override de estadísticas para testing */
  stats?: typeof STARTUP_BANNER_STATS
}

/**
 * Componente de banner de inicio para Luzzia
 * - SSR safe: Verifica window antes de cualquier operación
 * - Accesible: Labels ARIA completos
 * - Optimizado: Memoizado y con motion controladas
 * - Seguro: Tipos explícitos, validación de entrada
 */
export const StartupBanner = memo(
  ({ onClose, className = '', stats: customStats }: StartupBannerProps) => {
    const { isVisible, currentStat, handleClose, prefersReducedMotion, wasDismissedBefore } =
      useStartupBanner()

    // Usar estadísticas personalizadas o las por defecto
    const stats = useMemo(() => customStats || STARTUP_BANNER_STATS, [customStats])

    // Early return si fue dismissido o no visible
    if (wasDismissedBefore || !isVisible) return null

    // Manejar cierre con callback opcional
    const handleCloseClick = () => {
      handleClose()
      onClose?.()
    }

    // Obtener icono de forma segura
    const getIcon = (iconName: string) => {
      const IconComponent = ICON_MAP[iconName as keyof typeof ICON_MAP]
      return IconComponent ? <IconComponent className="w-4 h-4" /> : null
    }

    return (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: 'spring', damping: 20, stiffness: 300 }
        }
        className={`relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-700 dark:via-teal-700 dark:to-cyan-700 ${className}`}
        role="region"
        aria-label={STARTUP_BANNER_CONFIG.ARIA_LABELS.BANNER_CONTAINER}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        {/* Floating particles - Optimizado */}
        {STARTUP_BANNER_CONFIG.ENABLE_FLOATING_PARTICLES && !prefersReducedMotion && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(STARTUP_BANNER_CONFIG.PARTICLES_COUNT)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1.5 h-1.5 bg-white/15 rounded-full"
                initial={{
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                }}
                animate={{
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left content */}
            <div className="flex items-center gap-4 flex-1">
              <motion.div
                animate={prefersReducedMotion ? { rotate: 0 } : { rotate: 360 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: STARTUP_BANNER_CONFIG.ANIMATION_DURATION / 1000,
                        repeat: Infinity,
                        ease: 'linear',
                      }
                }
                className="hidden sm:flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full"
                aria-hidden="true"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>

              <div className="text-center lg:text-left">
                <motion.h2
                  className="text-xl lg:text-2xl font-bold text-white mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { delay: 0.2, duration: 0.5 }
                  }
                >
                  🚀 ¡Reduce tu factura eléctrica hasta un 30%!
                </motion.h2>
                <motion.p
                  className="text-white/90 text-sm lg:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { delay: 0.4, duration: 0.5 }
                  }
                >
                  Descubre cuándo usar tus electrodomésticos con datos oficiales en tiempo real
                </motion.p>
              </div>
            </div>

            {/* Center stats - Desktop */}
            {STARTUP_BANNER_CONFIG.SHOW_STATS_ON_DESKTOP && (
              <div className="hidden md:flex items-center justify-center">
                <motion.div
                  key={`stat-desktop-${currentStat}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={
                    prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }
                  }
                  className="bg-white/30 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[160px] border border-white/20"
                  role="status"
                  aria-live="polite"
                  aria-label={stats[currentStat]?.ariaLabel}
                >
                  <div className="flex items-center justify-center gap-2 text-white">
                    {getIcon(stats[currentStat]?.icon || '')}
                    <div className="text-center">
                      <div className="font-bold text-lg drop-shadow-sm">
                        {stats[currentStat]?.number}
                      </div>
                      <div className="text-xs opacity-95 drop-shadow-sm">
                        {stats[currentStat]?.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <Link href="/contact" prefetch={false}>
                <Button
                  size="sm"
                  className="bg-white text-emerald-700 hover:bg-gray-50 hover:text-emerald-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-emerald-700"
                  aria-label={STARTUP_BANNER_CONFIG.ARIA_LABELS.CTA_BUTTON}
                >
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={prefersReducedMotion ? {} : { x: 2 }}
                  >
                    <Zap className="w-4 h-4" />
                    Empezar Gratis
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseClick}
                className="text-white hover:bg-white/20 w-8 h-8"
                aria-label={STARTUP_BANNER_CONFIG.ARIA_LABELS.CLOSE_BUTTON}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="md:hidden mt-4">
            <div className="flex justify-center">
              <motion.div
                key={`stat-mobile-${currentStat}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }
                }
                className="bg-white/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
                role="status"
                aria-live="polite"
                aria-label={stats[currentStat]?.ariaLabel}
              >
                <div className="flex items-center justify-center gap-2 text-white">
                  {getIcon(stats[currentStat]?.icon || '')}
                  <div className="text-center">
                    <span className="font-bold text-lg drop-shadow-sm">
                      {stats[currentStat]?.number}
                    </span>
                    <span className="text-sm opacity-95 ml-2 drop-shadow-sm">
                      {stats[currentStat]?.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
)

StartupBanner.displayName = 'StartupBanner'