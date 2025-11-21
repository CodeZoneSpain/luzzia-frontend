import DashboardContentClient from "@/components/dashboard/layout/DashboardContentClient"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Suscríbete al Newsletter de Luzzia - Alertas de Precios Baratos',
  description: 'Únete a nuestra newsletter y recibe alertas cuando la electricidad esté más barata. No más facturas sorpresa. Suscripción gratuita y cancela cuando quieras.',
  keywords: ['newsletter luzzia', 'alertas precio luz', 'suscripción energía', 'notificaciones electricidad barata'],
  openGraph: {
    title: 'Newsletter Luzzia - Alertas de Electricidad Barata',
    description: 'Recibe alertas cuando la electricidad esté más barata y reduce tu factura automáticamente.',
    type: 'website',
  },
}

export default function page() {
  return (
    <>
      <section className="mb-8 pt-6 text-center">
        <DashboardContentClient />
      </section>
    </>
  )
}