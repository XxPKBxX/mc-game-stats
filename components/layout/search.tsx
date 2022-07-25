import { FormEvent, useEffect, useRef, useState } from 'react'
import { useUserContext } from '../../contexts/user'
import { useRouter } from 'next/router'
import { clearSpecialCharacters } from '../../utils/text'

import { SearchInput, IconButton, SearchWrapper } from './style'

export interface SearchProps {
  setLoading: Function
}

const Search = ({ setLoading }: SearchProps): JSX.Element => {
  const { player: { name } } = useUserContext()
  const [query, setQuery] = useState<string>('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const focus = (e: KeyboardEvent) => {
    if (e.key !== '/') return
    
    e.preventDefault()
    searchInputRef.current?.focus()
  }
  useEffect(() => {
    window.addEventListener('keypress', focus)
    return () => window.removeEventListener('keypress', focus)
  })

  const router = useRouter()
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (query.toLowerCase() === name?.toLowerCase()) return
    setLoading(true)
    router.push({
      pathname: `/users/${query}`
    }).then(() => {
      setLoading(false)
      setQuery('')
    })
  }

  return (
    <SearchWrapper onSubmit={submit}>
      <SearchInput
      ref={searchInputRef}
      type={'search'}
      value={query}
      onChange={(e) => setQuery(clearSpecialCharacters(e.target.value))}
      placeholder={name ?? 'Search User'}
      required />
      <IconButton
      aria-label={'Search'}
      type={'submit'}
      icon={'/assets/icon/search.svg'} />
    </SearchWrapper>
  )
}

export default Search