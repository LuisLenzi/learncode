import { Container, LoadingSpinner } from './styles';

interface LoadingProps {
  show: boolean
}

export default function Loading({ show }: LoadingProps) {
  return (
    <Container show={show}>
      <LoadingSpinner />
    </Container>
  );
}