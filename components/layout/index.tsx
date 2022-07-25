import Link from 'next/link'
import { useState } from 'react'

import Header from '../head'
import Footer from './footer'
import Search from './search'
import { IconButton, Body, NavbarWrapper, Loading, LoadingIcon, Navbar } from './style'

export interface LayoutProps {
  children: JSX.Element[] | JSX.Element
  loading?: boolean
  title?: string
}

const Layout = ({ children, loading, title }: LayoutProps): JSX.Element => {
  const [loadingFromChildren, setLoadingFromChildren] = useState<boolean>(false)

  return (
    <>
    <Header title={title} />
    <Body>
      <Loading active={(loading ?? false) || loadingFromChildren}>
        <LoadingIcon />
      </Loading>
      <NavbarWrapper>
        <Navbar>
          <Link href={'/'}>
            <IconButton
            aria-label={'Go Back'}
            type={'button'}
            icon={'/assets/icon/back.svg'} />
          </Link>
          <Search setLoading={setLoadingFromChildren} />
          <Link href={'/history'}>
            <IconButton
            aria-label={'History'}
            type={'button'}
            icon={'/assets/icon/history.svg'} />
          </Link>
        </Navbar>
      </NavbarWrapper>
      {children}
      <Footer />
    </Body>
    </>
  )
}

export default Layout