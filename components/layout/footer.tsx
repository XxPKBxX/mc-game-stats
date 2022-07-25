import Link from 'next/link'

import { FooterWrapper, FooterLink } from './style'

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <Link href='/about'>
      <FooterLink>About</FooterLink>
    </Link>
  </FooterWrapper>
)

export default Footer