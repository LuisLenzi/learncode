import React, { useState } from 'react'
import Image from 'next/image'

import Button from '../Button'

import { Container } from './styles'

export default function Insights() {
  const [product, setProduct] = useState([1, 2, 3])
  const [isActive, setIsActive] = useState(1)

  const disabled = {
    backgroundColor: 'var(--blue-solid)',
    padding: '0.3rem 1.75rem',
  }

  function handleSetButtonActive(index: number) {
    setIsActive(index)
  }

  return (
    <Container>
      <h1>Destaques</h1>
      <div className="box">
        <div className="image">
          <Image
            src="/assets/png/1.png"
            alt="Learn Code Logo"
            width={221}
            height={295}
          />
        </div>
        <div className="product">
          <div className="information">
            <div className="title">iPhone 13 Pro</div>
            <div className="description">Tela de 6,1 polegadas</div>
          </div>
          <div className="price">R$ 9.499,00</div>
          <div className="buy">
            <Button>Compre agora</Button>
          </div>
        </div>
      </div>
      <div className="slider">
        {product.map((index: number) => {
          return index === isActive ? (
            <Button key={index} />
          ) : (
            <Button
              key={index}
              style={disabled}
              onClick={() => handleSetButtonActive(index)}
            />
          )
        })}
      </div>
    </Container>
  )
}
