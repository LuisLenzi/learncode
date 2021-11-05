import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'

import Button from '../Button'

import { Context } from '../../contexts/context'

import styles from './Insights.module.scss'

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
  const [insightsObject, setInsightsObject] = useState(insights[isActive])

  const { handleSetBuyStateAndData } = useContext(Context)

  const disabled = {
    backgroundColor: 'var(--white-solid)',
    padding: '0.3rem 1.75rem',
  }

  function handleSetButtonActive(index: number) {
    setIsActive(index)
    setInsightsObject(insights[index])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive === insights.length - 1) {
        setIsActive(0)
        setInsightsObject(insights[0])
      } else {
        setIsActive(isActive + 1)
        setInsightsObject(insights[isActive + 1])
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isActive, insights])

  return (
    <div className={styles.container}>
      <h1>Destaques</h1>
      <div
        className={styles.box}
        key={insightsObject.id}
        style={{
          backgroundColor: insightsObject.style.backgroundColor,
          boxShadow: `0px .25px 35px .25px ${insightsObject.style.backgroundColor}`,
        }}
      >
        <div className={styles.boxContent}>
          <div className={styles.image}>
            <Image
              src={`/assets/png/${insightsObject.style.image}`}
              alt="Learn Code Logo"
              width={250}
              height={295}
            />
          </div>
          <div className={styles.product}>
            <div className={styles.information}>
              <div
                className={styles.title}
                style={{ color: insightsObject.style.titleColor }}
              >
                {insightsObject.productName}
              </div>
              <div
                className={styles.description}
                style={{ color: insightsObject.style.titleColor }}
              >
                {insightsObject.description}
              </div>
            </div>
            <div
              className={styles.price}
              style={{ color: insightsObject.style.titleColor }}
            >
              {parseFloat(String(insightsObject.price)).toLocaleString(
                'pt-br',
                {
                  style: 'currency',
                  currency: 'BRL',
                },
              )}
            </div>
            <div className={styles.buy}>
              <Button
                onClick={() => handleSetBuyStateAndData(true, insightsObject)}
              >
                Compre agora
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
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
    </div>
  )
}
