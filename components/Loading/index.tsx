import { Container } from './styles'

import Image from 'next/image'

interface LoadingProps {
  show: boolean
}

export default function Loading({ show }: LoadingProps) {
  return (
    <Container show={show}>
      <div className="box">
        <Image
          src={'/assets/svg/logo.svg'}
          width={200}
          height={200}
          alt="Loading"
        />
      </div>
    </Container>
  )
}
