import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, FormEvent, useRef } from 'react'
import { clearSpecialCharacters } from '../utils/text'

import Layout from '../components/layout'
import { Form, Search, NicknameInput, Container, ClickAnywhere } from '../components/home/style'
import Header from '../components/head'

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

  return (
    <>
    <Header />
    <Layout loading={loading}>
      <Container
      onClick={() => ref.current?.focus()}>
        <ClickAnywhere>You can click anywhere to search or press /.</ClickAnywhere>
        <Form onSubmit={submit}>
          <NicknameInput
          placeholder={'Nickname'}
          type={'search'}
          value={nickname}
          ref={ref}
          required
          onChange={(e) => setNickname(clearSpecialCharacters(e.target.value))} />
          <Search type={'submit'} />
        </Form>
      </Container>
      </Layout>
    </>
    )
}

export default Home
