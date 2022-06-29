// log the pageview with their URL
export const pageview = (url,id) => {
  window.gtag('config', id, {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}