import { Container, ErrorWrapper, ErrorMessage, ErrorTitle, ErrorSpinnerWrapper, ErrorSpinner } from './style'

export interface ErrorProps {
  error: string
}

const Error = ({ error }: ErrorProps): JSX.Element => {
  return (
    <Container>
      <ErrorSpinnerWrapper>
        <ErrorSpinner />
      </ErrorSpinnerWrapper>
      <ErrorWrapper>
        <ErrorTitle>An error has occurred.</ErrorTitle>
        <ErrorMessage>{error}</ErrorMessage>
      </ErrorWrapper>
    </Container>
  )
}

export default Error