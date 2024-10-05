export function getFaviconRefs(manifest) {
  const favicons = manifest.icons.concat([
    {
      rel: 'manifest',
      src: '/manifest.json',
    },
    {
      rel: 'icon',
      src: '/favicon.ico',
    },
  ])
  return favicons
    .map(
      (linkProps) =>
        `<link key=\"${linkProps.src}\" ${linkProps.rel ? `rel=\"${linkProps.rel}\"` : ''} ${linkProps.sizes ? `sizes=\"${linkProps.sizes}\"` : ''} href=\"${linkProps.src}\" />`,
    )
    .join('\n')
}
