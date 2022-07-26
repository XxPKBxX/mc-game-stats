import Image from 'next/image'
import styled from 'styled-components'

export const LevelInfo = styled.div`
display: grid;
gap: 20px;
justify-content: center;
`

export const LevelSection = styled.section`
display: grid;
gap: 20px;
grid-template-columns: auto 1fr;
`

export const LevelWrapper = styled.div`
display: grid;
gap: 5px;
justify-content: left;
align-items: center;


`

export const LevelTitle = styled.span`
display: block;

font-size: 1.1rem;
font-weight: bold;
`

export const LevelImage = styled(Image)`
image-rendering: pixelated;
`