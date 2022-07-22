import styled from 'styled-components'

export const Container = styled.div`
display: grid;
justify-content: center;
align-items: center;
grid-template-columns: 1fr 1fr;
gap: 20px;

@media screen and (max-width: 880px) {
  & {
    grid-template-columns: unset;
    grid-template-rows: 400px 400px;
    padding: 10px 20px;
    height: auto;
  }
}

padding: 20px 100px;

width: 100%;
height: 100%;
`