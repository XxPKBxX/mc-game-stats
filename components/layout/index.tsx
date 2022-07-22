import Link from 'next/link'
import { useState } from 'react'
import Search from './search'

import { IconButton, Body, NavbarWrapper, Loading, LoadingIcon, Navbar } from './style'

export interface LayoutProps {
  children: JSX.Element[] | JSX.Element,
  loading?: boolean
}

const Layout = ({ children, loading }: LayoutProps): JSX.Element => {
  const [loadingFromChildren, setLoadingFromChildren] = useState<boolean>(false)

  return (
    <Body>
      <Loading active={(loading ?? false) || loadingFromChildren}>
        <LoadingIcon />
      </Loading>
      <NavbarWrapper>
        <Navbar>
          <Link href={'/'}>
            <IconButton
            type={'button'}>
              <span className={'material-symbols-outlined'}>arrow_back</span>
            </IconButton>
          </Link>
          <Search setLoading={setLoadingFromChildren} />
          <Link href={'/help'}>
            <IconButton
            type={'button'}>
              <span className={'material-symbols-outlined'}>help</span>
            </IconButton>
          </Link>
        </Navbar>
      </NavbarWrapper>
      {children}
    </Body>
  )
}

export default Layout