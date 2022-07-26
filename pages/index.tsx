import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, FormEvent, useRef, useEffect } from 'react'
import { clearSpecialCharacters } from '../utils/text'

import Layout from '../components/layout'
import { Form, Search, NicknameInput, Container, ClickAnywhere } from '../components/home/style'

const Home: NextPage = () => {
  const [nickname, setNickname] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    router.push({
      pathname: `/users/${nickname}`
    })
  }

  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => ref.current?.focus(), [])

  return (
    <Layout loading={loading}>
      <Container
      onClick={() => ref.current?.focus()}>
        <ClickAnywhere>You can click anywhere or press / to search.</ClickAnywhere>
        <Form onSubmit={submit}>
          <NicknameInput
          placeholder={'Nickname'}
          type={'search'}
          value={nickname}
          ref={ref}
          required
          autoFocus
          onChange={(e) => setNickname(clearSpecialCharacters(e.target.value))} />
          <Search type={'submit'} aria-label={'Search'} />
        </Form>
      </Container>
    </Layout>
  )
}

export default Home
