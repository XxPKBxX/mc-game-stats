import styled from 'styled-components'
import { inputStyles } from '../global'

export const Container = styled.div`
display: grid;
gap: 10px;
justify-items: left;
grid-template-rows: auto auto 1fr;

padding: 100px 50px 50px 50px;

width: 100%;
height: 100%;
`

export const Title = styled.span`
display: block;

font-size: 1.2rem;
font-weight: bold;
`

export const ClearButton = styled.button`
${inputStyles}

cursor: pointer;

font-size: 0.9rem;
`

export const HistoryWrapper = styled.div`
display: grid;
gap: 10px;
align-content: flex-start;
grid-template-columns: auto 1fr;

margin-top: 10px;
`

export const Bar = styled.div`
display: block;

width: 5px;
height: 100%;

border-radius: 100vmax;

background-color: var(--c-history-bar-background-color);
`

export const SectionWrapper = styled.div`
display: grid;
gap: 30px;
align-content: flex-start;
`

export const Section = styled.section`
position: relative;

display: grid;
gap: 10px;
justify-items: left;
align-items: flex-start;

&::after {
  content: '';

  position: absolute;
  top: 5px;
  left: -17.5px;

  width: 10px;
  height: 10px;

  border-radius: 100%;

  background-color: var(--c-history-dot-background-color);
}
`

export const SectionDate = styled.span`
display: block;

font-size: 1.1rem;
font-weight: bold;
`