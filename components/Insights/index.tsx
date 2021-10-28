import React, { useState, useContext } from 'react'
import Image from 'next/image'

import Button from '../Button'

import { Container } from './styles'
import { Context } from '../../contexts/context'

interface InsightsInterface {
  id: number
  productName: string
  description: string
  price: number
  colors: [
    {
      colorName: string
      backgroundColor: string
    },
  ]
  style: {
    titleColor: string
    backgroundColor: string
    image: string
  }
}

interface InsightsProps {
  insights: InsightsInterface[]
}

export default function Insights({ insights }: InsightsProps) {
  const product: number[] = [0, 1, 2]

  const [isActive, setIsActive] = useState(0)
  const [insightsObject, setInsightsObject] = useState(insights[0])

  const { handleSetBuyStateAndData } = useContext(Context)

  const disabled = {
    backgroundColor: 'var(--white-solid)',
    padding: '0.3rem 1.75rem',
  }

  function handleSetButtonActive(index: number) {
    setIsActive(index)
    setInsightsObject(insights[index])
  }

  return (
    <Container>
      <h1>Destaques</h1>
      <div
        className="box"
        key={insightsObject.id}
        style={{
          backgroundColor: insightsObject.style.backgroundColor,
          boxShadow: `0px .25px 35px .25px ${insightsObject.style.backgroundColor}`,
        }}
      >
        <div className="image">
          <Image
            src={`/assets/png/${insightsObject.style.image}`}
            alt="Learn Code Logo"
            width={250}
            height={295}
          />
        </div>
        <div className="product">
          <div className="information">
            <div
              className="title"
              style={{ color: insightsObject.style.titleColor }}
            >
              {insightsObject.productName}
            </div>
            <div
              className="description"
              style={{ color: insightsObject.style.titleColor }}
            >
              {insightsObject.description}
            </div>
          </div>
          <div
            className="price"
            style={{ color: insightsObject.style.titleColor }}
          >
            {parseFloat(String(insightsObject.price)).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
          <div className="buy">
            <Button
              onClick={() => handleSetBuyStateAndData(true, insightsObject)}
            >
              Compre agora
            </Button>
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
