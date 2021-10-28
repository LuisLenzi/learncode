import React, { useContext } from 'react'

import Image from 'next/image'

import Button from '../Button'

import { Context } from '../../contexts/context'

import { Container } from './styles'

interface ProductsInterface {
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

interface ProductsProps {
  products: ProductsInterface[]
}

export default function Products({ products }: ProductsProps) {
  const { handleSetBuyStateAndData } = useContext(Context)

  return (
    <Container>
      <h1>Produtos</h1>
      <div className="content">
        {products.map((product) => {
          return (
            <div
              className="box"
              style={{
                backgroundColor: product.style.backgroundColor,
                boxShadow: `0px .25px 35px .25px ${product.style.backgroundColor}`,
              }}
              key={product.id}
            >
              <div className="product">
                <div className="information">
                  <div
                    className="title"
                    style={{ color: product.style.titleColor }}
                  >
                    {product.productName}
                  </div>
                  <div
                    className="description"
                    style={{ color: product.style.titleColor }}
                  >
                    {product.description}
                  </div>
                </div>
                <div className="buy">
                  <Button
                    onClick={() => handleSetBuyStateAndData(true, product)}
                  >
                    Compre agora
                  </Button>
                </div>
              </div>
              <div className="image">
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
    </Container>
  )
}
