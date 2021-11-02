import React, { useContext } from 'react'

import Image from 'next/image'

import Button from '../Button'

import { Context } from '../../contexts/context'

import styles from './Products.module.scss'
interface ProductsInterface {
  id: number
  productName: string
  description: string
  price: number
  promotion: number
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

interface ProductsProps {
  products: ProductsInterface[]
}

export default function Products({ products }: ProductsProps) {
  const { handleSetBuyStateAndData } = useContext(Context)

  return (
    <div className={styles.container}>
      <h1>Produtos</h1>
      <div className={styles.content}>
        {products.map((product) => {
          return (
            <div
              className={styles.box}
              style={{
                backgroundColor: product.style.backgroundColor,
                boxShadow: `0px .25px 35px .25px ${product.style.backgroundColor}`,
              }}
              key={product.id}
            >
              <div className={styles.product}>
                <div className={styles.information}>
                  <div
                    className={styles.title}
                    style={{ color: product.style.titleColor }}
                  >
                    {product.productName}
                  </div>
                  <div
                    className={styles.description}
                    style={{ color: product.style.titleColor }}
                  >
                    {product.description}
                  </div>
                </div>
                <div className={styles.buy}>
                  {product.promotion && (
                    <div className={styles.promotion}>
                      <span>{product.promotion.toFixed(2)}% OFF</span>
                    </div>
                  )}
                  <Button
                    onClick={() => handleSetBuyStateAndData(true, product)}
                  >
                    Compre agora
                  </Button>
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  src={`/assets/png/${product.style.image}`}
                  alt="Learn Code Logo"
                  width={250}
                  height={235}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
