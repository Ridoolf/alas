import { useEffect } from 'react'

export function useDocumentTitle(titulo) {
  useEffect(() => {
    const base = 'ALAS Centro Médico'
    document.title = titulo ? `${titulo} | ${base}` : base
  }, [titulo])
}
