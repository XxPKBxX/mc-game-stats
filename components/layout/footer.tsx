import Link from 'next/link'

import { FooterWrapper, FooterLink } from './style'

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <Link href={'/about'}>
      <FooterLink>About</FooterLink>
    </Link>
    <FooterLink
    href={'https://github.com/XxPKBxX/mc-game-stats'}
    target={'_blank'} >Source Code</FooterLink>
  </FooterWrapper>
)

export default Footer