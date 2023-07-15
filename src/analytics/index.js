import injected from '../injected.json'

export const GA_TRACKING_ID = injected.gtag

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  const isDev = process.env.NODE_ENV === 'development'
  if (isDev) {
    return
  }
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

export const GtagScript = () => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', '${GA_TRACKING_ID}');
`,
      }}
    />
  </>
)
