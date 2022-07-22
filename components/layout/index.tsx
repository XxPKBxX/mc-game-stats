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
            aria-label={'Go Back'}
            type={'button'}
            icon={'/assets/icon/back.svg'} />
          </Link>
          <Search setLoading={setLoadingFromChildren} />
          <Link href={'/help'}>
            <IconButton
            aria-label={'Information'}
            type={'button'}
            icon={'/assets/icon/info.svg'} />
          </Link>
        </Navbar>
      </NavbarWrapper>
      {children}
    </Body>
  )
}

export default Layout