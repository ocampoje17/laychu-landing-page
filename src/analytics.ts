export const GA_MEASUREMENT_ID = 'G-QL0RJ8863V'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

let googleTagLoaded = false

export function enableAnalytics() {
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false

  if (googleTagLoaded) {
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args))
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.append(script)
  googleTagLoaded = true
}

export function disableAnalytics() {
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
}

export function trackProductClick(parameters: {
  product_name: string
  product_id: string
  platform_group: string
  language: string
  destination_domain: string
}) {
  if (window[`ga-disable-${GA_MEASUREMENT_ID}`] || !window.gtag) {
    return
  }

  window.gtag('event', 'select_product', parameters)
}
