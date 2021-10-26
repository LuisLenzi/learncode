import React from 'react'
import Image from 'next/image'

import Button from '../Button'

import { Container } from './styles'

export default function Products() {
  return (
    <Container>
      <h1>Produtos</h1>
      <div className="box" style={{ backgroundColor: 'var(--z-flip)' }}>
        <div className="product">
          <div className="information">
            <div className="title" style={{ color: 'var(--blue-solid)' }}>
              Galaxy Z Flip3 5G
            </div>
            <div className="description" style={{ color: 'var(--blue-solid)' }}>
              Tela de 6,7 polegadas
            </div>
          </div>
          <div className="buy">
            <Button>Compre agora</Button>
          </div>
        </div>
        <div className="image">
          <Image
            src="/assets/png/2.png"
            alt="Learn Code Logo"
            width={247}
            height={268}
          />
        </div>
      </div>
    </Container>
  )
}
