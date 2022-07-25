import { Container, ErrorWrapper, ErrorMessage, ErrorTitle, ErrorSpinnerWrapper, ErrorSpinner } from './style'

export interface ErrorProps {
  error: string
  rainbow?: boolean
}

const Error = ({ error, rainbow }: ErrorProps): JSX.Element => {
  return (
    <Container rainbow={rainbow}>
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