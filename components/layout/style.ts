import styled, { css } from 'styled-components'
import { iconStyles, inputStyles } from '../global'

export const Body = styled.div`
display: grid;
grid-template-rows: minmax(500px, 1fr) auto;

width: 100%;
min-height: 100vh;
`

export interface LoadingProps {
  active: boolean
}
export const Loading = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: var(--z-loading);

display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 100%;

background-color: var(--c-loading-background-color);

cursor: progress;

opacity: 0;
pointer-events: none;
transition: opacity 0.2s var(--animation-ease);

${(props: LoadingProps) => props.active ? css`
opacity: 1;
pointer-events: auto;
` : null}
`

export const LoadingIcon = styled.div`
display: block;

width: 50px;
height: 50px;

border-radius: 5px;

background-color: var(--c-loading-spin-color);

animation: spin-animation 3s 0s infinite ease;

@keyframes spin-animation {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(360deg) scale(0.5);
  }
  100% {
    transform: rotate(720deg) scale(1);
  }
}
`

export const NavbarWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: var(--z-top-bar);

display: flex;
gap: 20px;
align-items: center;

width: 100%;
height: 80px;

background-color: var(--c-background-color);

padding: 30px 30px 10px 30px;
`

export const Navbar = styled.div`
display: flex;
gap: 20px;

width: 100%;
max-width: 400px;
height: 100%;
`

export interface IconButtonProps {
  icon: string
}
export const IconButton = styled.button`
${inputStyles}

display: flex;
justify-content: center;
align-items: center;

background-color: var(--c-back-button-background-color);
color: var(--c-back-button-text-color);

background-image: url(${(props: IconButtonProps) => props.icon});
${iconStyles}

border: none;
border-radius: 10px;
padding: 5px;

height: 100%;

aspect-ratio: 1 / 1;

cursor: pointer;
`

export const SearchWrapper = styled.form`
display: flex;
gap: 10px;
align-items: stretch;

height: 100%;
`

export const SearchInput = styled.input`
${inputStyles}

display: block;

width: 100%;
min-width: 50px;
`

export const FooterWrapper = styled.footer`
display: flex;
gap: 10px;

padding: 20px 30px;

background-color: var(--c-footer-background-color);
color: var(--c-footer-text-color);
`

export const FooterLink = styled.a`
position: relative;

display: block;

cursor: pointer;

&::after {
  content: '';

  position: absolute;
  top: 100%;
  left: 0;

  display: block;

  width: 100%;
  height: 1px;

  background-color: var(--c-footer-text-color);
}
`