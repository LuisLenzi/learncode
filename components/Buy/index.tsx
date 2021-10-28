import { useState, useContext } from 'react'

import Image from 'next/image'

import Button from '../Button'

import { Context } from '../../contexts/context'

import { GrClose } from 'react-icons/gr'
import { Container } from './styles'

interface BuyInterface {
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

interface BuyProps {
  buy: BuyInterface
  show: boolean
}

export default function Buy({ buy, show }: BuyProps) {
  const [isActive, setIsActive] = useState(0)
  const [colorsObject, setColorsObject] = useState(buy.colors)

  const { handleSetBuyStateAndData } = useContext(Context)

  function handleSetButtonActive(index: number) {
    setIsActive(index)
    setColorsObject(buy.colors)
  }

  const disabled = {
    border: '1px solid var(--blue-solid-light)',
    opacity: 0.8,
  }

  return (
    <Container show={show}>
      <div className="content">
        {!!buy && (
          <>
            <Image
              src={`/assets/png/${buy.style.image}`}
              alt="Iphone"
              width={475}
              height={450}
              objectFit="contain"
            />
            <div className="information">
              <div className="close">
                <GrClose
                  size={35}
                  onClick={() => handleSetBuyStateAndData(false)}
                />
              </div>
              <div className="product">
                <h1 className="productName">Comprar {buy.productName}</h1>
                <p className="description">{buy.description}</p>
              </div>
              <div className="colors">
                <h3>Escolha a cor</h3>
                <div className="colorGrid">
                  {Object.keys(colorsObject).map(
                    (color: any, index: number) => {
                      return index === isActive ? (
                        <Button className="color" key={index}>
                          <div
                            className="colorRadius"
                            style={{
                              backgroundColor:
                                colorsObject[color].backgroundColor,
                            }}
                          />
                          <p className="colorName">
                            {colorsObject[color].colorName}
                          </p>
                        </Button>
                      ) : (
                        <Button
                          key={index}
                          style={disabled}
                          onClick={() => handleSetButtonActive(index)}
                          className="color"
                        >
                          <div
                            className="colorRadius"
                            style={{
                              backgroundColor:
                                colorsObject[color].backgroundColor,
                            }}
                          />
                          <p className="colorName">
                            {colorsObject[color].colorName}
                          </p>
                        </Button>
                      )
                    },
                  )}
                </div>
              </div>
              <div className="price">
                <h1>
                  {parseFloat(String(buy.price)).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </h1>
              </div>
              <Button>Finalizar compra</Button>
            </div>
          </>
        )}
      </div>
    </Container>
  )
}
