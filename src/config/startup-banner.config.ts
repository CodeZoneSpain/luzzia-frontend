/**
 * Configuración centralizada para el StartupBanner
 * Mejora mantenibilidad, testabilidad y escalabilidad
 */

export const STARTUP_BANNER_CONFIG = {
  // Timing (en milisegundos)
  SHOW_DELAY: 10, // Delay inicial para mostrar el banner
  STATS_ROTATION_INTERVAL: 6000, // Intervalo de rotación de estadísticas (aumentado para mobile)
  ANIMATION_DURATION: 12000, // Duración de animaciones (rotación de icono)

  // Storage
  STORAGE_KEY: 'luzzia-startup-banner-dismissed',
  STORAGE_PREFIX: 'luzzia-banner:',

  // Comportamiento
  AUTO_HIDE_ON_MOBILE: false, // Si se debe ocultar automáticamente en móvil
  RESPECT_PREFERS_REDUCED_MOTION: true, // Respetar preferencia de movimiento reducido
  DISABLE_ANIMATIONS_ON_MOBILE: true, // Desabilitar animaciones en mobile para performance
  
  // Feature flags
  ENABLE_FLOATING_PARTICLES: true,
  PARTICLES_COUNT: 3, // Reducido para performance
  ENABLE_STATS_ROTATION: true,

  // Analytics
  TRACK_IMPRESSIONS: true,
  TRACK_DISMISSALS: true,
  TRACK_CLICKS: true,

  // Accesibilidad
  ARIA_LABELS: {
    CLOSE_BUTTON: 'Cerrar banner',
    CTA_BUTTON: 'Comenzar a usar Luzzia gratis - Ir a página de contacto',
    BANNER_CONTAINER: 'Banner de bienvenida de Luzzia',
  },

  // Responsive
  SHOW_STATS_ON_DESKTOP: true,
  SHOW_STATS_ON_MOBILE: false, // No mostrar rotación de estadísticas en mobile
  SHOW_PARTICLES_ON_MOBILE: false, // NUNCA mostrar partículas en mobile
  MOBILE_BREAKPOINT: 768, // px - md breakpoint
} as const

/**
 * Estadísticas que se muestran en rotación
 */
export const STARTUP_BANNER_STATS = [
  {
    number: '1,000+',
    label: 'Usuarios activos',
    icon: 'Users',
    ariaLabel: 'Mil usuarios activos'
  },
  {
    number: '30%',
    label: 'Ahorro promedio',
    icon: 'Euro',
    ariaLabel: 'Treinta por ciento de ahorro promedio'
  },
  {
    number: '24/7',
    label: 'Datos en tiempo real',
    icon: 'Clock',
    ariaLabel: 'Datos disponibles veinticuatro horas siete días a la semana'
  },
  {
    number: '100%',
    label: 'Datos oficiales REE',
    icon: 'Shield',
    ariaLabel: 'Cien por ciento de datos oficiales de Red Eléctrica de España'
  }
] as const

// Type-safety exports
export type StartupBannerConfig = typeof STARTUP_BANNER_CONFIG
export type StartupBannerStat = (typeof STARTUP_BANNER_STATS)[number]
