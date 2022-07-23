import Image from 'next/image'
import styled from 'styled-components'

export const UserInfo = styled.div`
display: grid;
gap: 20px;
grid-template-columns: auto auto;
justify-content: center;
align-items: center;

text-align: left;
`

export const NameWrapper = styled.div`
position: relative;

display: grid;
gap: 10px;
grid-template-columns: auto 1fr;
justify-items: left;
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
align-items: stretch;

font-size: 2rem;
font-weight: bold;

padding: 5px;
`

export const NicknameText = styled.span`
position: relative;

display: block;

overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;

&::-webkit-scrollbar {
  height: 3px;
}
&::-webkit-scrollbar-thumb {
  background-color: var(--c-history-scrollbar-background-color);
  border-radius: 100vmax;
}
`

export const NicknameHistory = styled.div`
position: absolute;
top: 100%;
left: 0;

transition: 0.2s var(--animation-ease);
transition-property: opacity, transform;

font-size: 1rem;
font-weight: normal;

display: grid;

border-radius: 5px;
margin: 5px;

background-color: var(--c-history-background-color);
color: var(--c-history-text-color);

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
`