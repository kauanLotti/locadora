import { useEffect, useState } from 'react'
import type { Title } from '../dtos/title'
import { TitleService } from '../services/title-service'

export function useTitle() {
  const [titles, setTitles] = useState<Title[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    TitleService.listAll(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) setTitles(data)
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setError('Não foi possível carregar o catálogo. Verifique sua conexão e atualize a página para tentar novamente.')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { titles, loading, error }
}
