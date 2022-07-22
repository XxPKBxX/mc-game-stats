import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
gap: 10px;

padding: 10px 100px;

width: 100%;
height: 100%;
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

background-color: var(--c-error-spinner-background-color);

animation: spin-animation 2s 0s infinite forwards var(--animation-ease);

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