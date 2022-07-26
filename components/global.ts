import styled, { css } from 'styled-components'

export const maxWidth = '880px'

export const outlineStyles = css`
outline: 0px solid var(--c-input-outline-color);
transition: outline 0.2s ease;
&:hover { outline-width: 3px; }
&:focus { outline-width: 5px; }
`

export const inputStyles = css`
padding: 10px;
border: none;
border-radius: 10px;

background-color: var(--c-input-background-color);
color: var(--c-input-text-color);

${outlineStyles}
`

export const iconStyles = css`
background-position: center center;
background-size: 60% 60%;
background-repeat: no-repeat;
`

export const A = styled.a`
position: relative;

display: inline-block;

color: var(--c-link-text-color);

cursor: pointer;

border-radius: 5px;

&::after {
  content: '';

  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(-100%);

  display: block;

  width: 100%;
  height: 3px;

  background-color: var(--c-link-text-color);

  opacity: 0.4;
  
  transition: height 0.2s var(--animation-ease);
}
&:where(:hover, :focus)::after { height: 7px; }
`