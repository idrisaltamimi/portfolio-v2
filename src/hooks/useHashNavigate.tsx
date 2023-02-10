import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext, ThemeContextType } from '../context'

const useHashNavigate = () => {
  const { getHash } = useContext(ThemeContext) as ThemeContextType
  const navigate = useNavigate()

  const hashNavigate = (hashLink: string) => {
    getHash(`/#${hashLink}`)
    navigate(`/#${hashLink}`)
  }
  return hashNavigate
}

export default useHashNavigate
