import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import fr from '../locales/fr.json'

const messages = {
  fr,
}

import injected from '../injected.json'

export const useLocale = () => {
  const router = useRouter()

  const flattenedMessages = useMemo(() => messages[router.locale], [router])

  const switchLocale = useCallback(
    (locale) => {
      if (locale === router.locale) {
        return
      }

      const path = router.asPath
      return router.push(path, path, { locale })
    },
    [router],
  )
  return {
    locale: router.locale || injected.defaultLocale,
    switchLocale,
    messages: flattenedMessages,
  }
}
