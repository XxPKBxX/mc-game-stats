import Image from 'next/image'
import styled, { css } from 'styled-components'
import { outlineStyles } from '../../global'

export const UserInfo = styled.div`
display: grid;
gap: 20px;
grid-template-rows: auto auto;
justify-content: left;
align-items: center;

text-align: left;
`

export const NameWrapper = styled.div`
position: relative;

display: grid;
gap: 10px;
grid-template-columns: auto 1fr;
justify-items: left;
align-items: center;
`

export const PlayerAvatarWrapper = styled.div`
display: block;

width: 50px;
height: 50px;
`

export const PlayerAvatar = styled(Image)`
image-rendering: pixelated;
border-radius: 5px;
`

export const NicknameWrapper = styled.span`
position: relative;

display: grid;
gap: 15px;
grid-template-columns: auto auto;
align-items: center;

font-size: 2rem;
font-weight: bold;

padding: 5px;
`

export interface NicknameTextProps {
  online: boolean | null
}

export const NicknameText = styled.a`
position: relative;

display: block;

cursor: pointer;

border-radius: 5px;

${outlineStyles}

&::-webkit-scrollbar { display: none; }

${(props: NicknameTextProps) => props.online !== null ? css`
&::after {
  content: '';

  position: absolute;
  top: 0;
  left: 100%;

  display: block;

  width: 10px;
  height: 10px;

  border-radius: 100%;

  background-color: ${props.online ? 'var(--c-green)' : 'var(--c-red)'};
}
` : null}
`

export interface NicknameHistoryProps {
  shown: boolean
}

export const NicknameHistory = styled.div`
position: absolute;
top: 100%;
left: 0;
z-index: 1;

font-size: 1rem;
font-weight: normal;

display: grid;
align-content: flex-start;

border-radius: 5px;
margin: 5px;

background-color: var(--c-history-background-color);
color: var(--c-history-text-color);

max-height: 100px;
overflow-y: scroll;

opacity: 0;
pointer-events: none;
transition: 0.2s var(--animation-ease);

${(props: NicknameHistoryProps) => props.shown ? css`
opacity: 1;
pointer-events: auto;
` : null}

& > span {
  display: block;

  padding: 5px 10px;

  font-size: 0.8rem;
}
`

export const InfoWrapper = styled.div`
display: flex;
align-items: center;
gap: 5px;
`

export const Table = styled.table`
display: block;

& > tbody > tr > th {
  text-align: right;
}
& > tbody > tr > td {
  display: flex;
  gap: 5px;
}
`