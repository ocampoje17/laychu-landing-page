export const GA_MEASUREMENT_ID = 'G-QL0RJ8863V'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

let googleTagLoadPromise: Promise<void> | undefined
let googleTagInitialized = false
let pageViewConfigured = false

function getGoogleTag() {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    // Google gtag.js expects each command to be queued as an Arguments object.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }
  return window.gtag!
}

function loadGoogleTag() {
  if (googleTagLoadPromise) return googleTagLoadPromise

  googleTagLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.onload = () => resolve()
    script.onerror = () => {
      googleTagLoadPromise = undefined
      script.remove()
      reject(new Error('Unable to load Google Analytics'))
    }
    document.head.append(script)
  })

  return googleTagLoadPromise
}

export function enableAnalytics() {
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false
  const gtag = getGoogleTag()
  if (!googleTagInitialized) {
    gtag('js', new Date())
    googleTagInitialized = true
  }

  void loadGoogleTag()
    .then(() => {
      if (window[`ga-disable-${GA_MEASUREMENT_ID}`]) return
      gtag('consent', 'update', { analytics_storage: 'granted' })
      if (!pageViewConfigured) {
        gtag('config', GA_MEASUREMENT_ID)
        pageViewConfigured = true
      }
    })
    .catch(() => {
      // The next consent action can retry loading the tag.
    })
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
