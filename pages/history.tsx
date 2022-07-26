import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { History, historyItemName } from '../utils/history'

import { Bar, Container, Title, Section, HistoryWrapper, SectionWrapper, SectionDate, ClearButton } from '../components/history/style'
import Layout from '../components/layout'
import Link from 'next/link'
import { A } from '../components/global'

const formatDate = (unix: number) => {
  const time = new Date(unix)

  // I didn't want to use modules for this
  return `${time.getFullYear()}. ${time.getMonth() + 1}. ${time.getDate()}. ${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`
}

const History: NextPage = () => {
  const [history, setHistory] = useState<History[]>([])

  useEffect(() => {
    const storage = localStorage.getItem(historyItemName)
    if (!storage) return

    try {
      const historyData: History[] = JSON.parse(storage)

      setHistory(historyData)
    }
    catch { clear() }
  }, [])
  
  const clear = () => {
    localStorage.removeItem(historyItemName)
    setHistory([])
  }

  return (
    <Layout title={'History'}>
      <Container>
        <Title>Search History (up to 50)</Title>
        <ClearButton type={'button'} onClick={clear}>Clear</ClearButton>
        <HistoryWrapper>
          <Bar />
          <SectionWrapper>
            {
              history.length > 0 ? history.map((item, index) => (
                <Section key={index}>
                  <SectionDate>{formatDate(item.time)}</SectionDate>
                  <Link href={`/users/${item.name}`}>
                    <A>{item.name}</A>
                  </Link>
                </Section>
              )) : (
                <span>Empty...</span>
              )
            }
          </SectionWrapper>
        </HistoryWrapper>
      </Container>
    </Layout>
  )
}

export default History