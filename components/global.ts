import { css } from 'styled-components'

export const inputStyles = css`
padding: 10px;
border: none;
border-radius: 10px;

background-color: var(--c-input-background-color);
color: var(--c-input-text-color);

outline: 0px solid var(--c-input-outline-color);
transition: outline 0.2s ease;
&:hover { outline-width: 3px; }
&:focus { outline-width: 5px; }
`

export const iconStyles = css`
background-position: center center;
background-size: 60% 60%;
background-repeat: no-repeat;
`