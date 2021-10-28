import { Container } from './styles'

interface LoadingProps {
  show: boolean
}

export default function Loading({ show }: LoadingProps) {
  return (
    <Container show={show}>
      <div className="box">
        <div className="image" />
      </div>
    </Container>
  )
}
