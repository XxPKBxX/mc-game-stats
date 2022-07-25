import styled from 'styled-components'
import { maxWidth } from '../global'

export const Container = styled.div`
display: grid;
justify-content: left;
align-items: center;
grid-template-columns: 1fr 1fr;
gap: 20px;

@media screen and (max-width: ${maxWidth}) {
  & {
    grid-template-columns: unset;
    grid-template-rows: 400px 400px;
    padding: 50px;
    height: auto;
  }
}

padding: 20px 100px;

width: 100%;
height: 100%;
`