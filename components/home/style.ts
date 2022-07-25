import styled from 'styled-components'
import { iconStyles, inputStyles } from '../global'

export const Container = styled.div`
position: relative;

display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 100%;

padding: 10px;

cursor: text;
`

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: stretch;
gap: 5px;

height: 70px;
`

export const NicknameInput = styled.input`
${inputStyles}

background-color: transparent;
color: var(--c-text-color);

display: block;

font-size: 3rem;
font-weight: bold;
text-align: center;

width: 100%;
max-width: 500px;
`

export const Search = styled.button`
${inputStyles}

display: flex;
justify-content: center;
align-items: center;

font-size: 3rem;

aspect-ratio: 1 / 1;

cursor: pointer;

${iconStyles}
background-image: url('/assets/icon/search.svg');
`

export const ClickAnywhere = styled.div`
position: absolute;
bottom: 0;
left: 0;
z-index: var(--z-ca);

display: flex;

width: 100%;

padding: 20px;

color: var(--c-ca-text-color);
`