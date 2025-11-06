// Lightweight GTM dataLayer helper

type DataLayerEvent = {
  event: string
  [key: string]: any
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[]
  }
}

export const pushDataLayer = (payload: DataLayerEvent) => {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(payload)
    }
  } catch (_) {

  }
}

export const trackButtonClick = (label: string, location?: string, extra?: Record<string, any>) => {
  pushDataLayer({
    event: 'button_click',
    label,
    location,
    ...extra,
  })
}

export const trackFormSubmitAttempt = (formName: string) => {
  pushDataLayer({ event: 'form_submit_attempt', formName })
}

export const trackFormSubmitSuccess = (formName: string) => {
  pushDataLayer({ event: 'form_submit_success', formName })
}

export const trackFormSubmitError = (formName: string, error?: string) => {
  pushDataLayer({ event: 'form_submit_error', formName, error })
}

export const trackBookingsOpen = () => {
  pushDataLayer({ event: 'bookings_open' })
}

export const trackBookingsIframeLoaded = () => {
  pushDataLayer({ event: 'bookings_iframe_loaded' })
}

export const trackBookingsClose = () => {
  pushDataLayer({ event: 'bookings_close' })
}
