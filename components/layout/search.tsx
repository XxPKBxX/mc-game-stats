import { FormEvent, useEffect, useRef, useState } from 'react'
import { useUserContext } from '../../contexts/user'
import { useRouter } from 'next/router'
import { clearSpecialCharacters } from '../../utils/text'

import { SearchInput, SearchSubmit, SearchWrapper } from './style'
import { SearchIcon } from '../home/style'

export interface SearchProps {
  setLoading: Function
}

const Search = ({ setLoading }: SearchProps): JSX.Element => {
  const { player: { name } } = useUserContext()
  const [query, setQuery] = useState<string>(name ?? '')
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
      placeholder={'Search User'}
      required />
      <SearchSubmit>
        <SearchIcon className={'material-symbols-outlined'}>search</SearchIcon>
      </SearchSubmit>
    </SearchWrapper>
  )
}

export default Search