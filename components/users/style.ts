import styled from 'styled-components'
import { maxWidth } from '../global'

export const Wrapper = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
`

export const Container = styled.div`
display: grid;
justify-items: center;
align-items: flex-start;
grid-template-columns: 1fr 1fr;
gap: 50px;

@media screen and (max-width: ${maxWidth}) {
  & {
    gap: 80px;
    grid-template-columns: unset;
    grid-template-rows: auto auto;
    padding: 130px 50px;
    height: auto;
  }
}

padding: 150px 100px;
`