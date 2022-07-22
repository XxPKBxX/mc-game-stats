import styled from 'styled-components'
import { iconStyles, inputStyles } from '../global'

export const Body = styled.div`
display: grid;
grid-template-rows: minmax(500px, 1fr);

width: 100%;
height: 100vh;
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

${(props: LoadingProps) => props.active ? `
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
height: 100px;

background-image: linear-gradient(
  to bottom,
  black,
  transparent
);

padding: 30px;
`

export const Navbar = styled.div`
display: grid;
gap: 20px;
grid-template-columns: auto 1fr auto;

width: 100%;
max-width: 350px;
height: 100%;
`

export interface IconButtonProps {
  icon: string
}
export const IconButton = styled.button`
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

transition: opacity 0.2s var(--animation-ease);
&:hover { opacity: 0.8; }
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
`

export const SearchSubmit = styled.button`
${inputStyles}

display: block;

cursor: pointer;

aspect-ratio: 1 / 1;

${iconStyles}
background-image: url('/assets/icon/search.svg');
`