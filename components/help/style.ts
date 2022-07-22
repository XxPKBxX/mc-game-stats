import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
display: grid;
gap: 10px;
justify-items: left;
align-content: flex-start;

padding: 150px 50px;
`

export const Title = styled.span`
display: block;
gap: 10px;
align-items: center;

font-size: 1.5rem;
font-weight: bold;
`

export const A = styled.a`
position: relative;

display: inline-block;

color: var(--c-link-text-color);

&::after {
  content: '';

  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(-100%);

  display: block;

  width: 100%;
  height: 1px;

  background-color: var(--c-link-text-color);

  opacity: 0.4;
  
  transition: height 0.5s var(--animation-ease);
}
&:hover::after { height: 10px; }
`