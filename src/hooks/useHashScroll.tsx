import { useContext, useEffect } from 'react'

import { ThemeContext, ThemeContextType } from '../context'

const useHashScroll = (ref: HTMLElement | null, section: string) => {
  const { hash, getHash } = useContext(ThemeContext) as ThemeContextType

  useEffect(() => {
    if (!ref) return
    if (hash !== `/#${section}`) return

    ref.scrollIntoView({ behavior: 'smooth' })

    return getHash('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash])
}

export default useHashScroll
