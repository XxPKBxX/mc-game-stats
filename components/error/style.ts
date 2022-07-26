import styled, { css } from 'styled-components'

export interface ContainerProps {
  rainbow?: boolean
}

export const Container = styled.div`
display: flex;
align-items: center;
gap: 10px;

padding: 10px 20px;

width: 100%;
height: 100%;

--color: var(--c-text-color);

${(props: ContainerProps) => props.rainbow ? css`
animation: rainbow-animation 3s 0s infinite forwards linear;
` : null}

@media screen and (prefers-reduced-motion: reduce) { animation: none; }
@keyframes rainbow-animation {
  0%, 100% { --color: var(--c-red); }
  20% { --color: var(--c-orange); }
  40% { --color: var(--c-green); }
  60% { --color: var(--c-blue); }
  80% { --color: var(--c-purple); }
}
`

export const ErrorSpinnerWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 70px;
height: 70px;
`

export const ErrorSpinner = styled.div`
display: block;

width: 50%;
height: 10px;

border-radius: 3px;

background-color: var(--color);

animation: spin-animation 2s 0s infinite forwards var(--animation-ease);

@media screen and (prefers-reduced-motion: reduce) { animation: none; }

@keyframes spin-animation {
  0% {
    transform: rotate(0deg);
  }
  80%, 100% {
    transform: rotate(360deg);
  }
}
`

export const ErrorWrapper = styled.div`
display: grid;
gap: 10px;

color: var(--color);
`

export const ErrorTitle = styled.span`
display: block;

font-size: 1.5rem;
font-weight: bold;
`

export const ErrorMessage = styled.span`
display: block;

font-size: 1rem;
`