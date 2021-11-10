import { useState, useContext, useRef } from 'react'

import Image from 'next/image'

import Button from '../Button'

import { Context } from '../../contexts/context'

import { GrClose } from 'react-icons/gr'
import { FiMinus } from 'react-icons/fi'
import { MdAdd } from 'react-icons/md'

import { Container } from './styles'

import confetti from 'canvas-confetti'
import BuyMessage from './BuyMessage'

interface BuyInterface {
  id: number
  productName: string
  description: string
  price: number
  promotion: number
  colors: [
    {
      colorName: string
      backgroundColor: string
      quantity: number
      image: string
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

  const price = useRef(buy.price)
  const inventory = useRef<number[]>(colorsObject.map((item) => item.quantity))
  const image = useRef<string[]>(colorsObject.map((item) => item.image))
  const [quantity, setQuantity] = useState(1)

  const [showBuyMessage, setShowBuyMessage] = useState(false)

  const { handleSetBuyStateAndData } = useContext(Context)

  function handleSetButtonActive(index: number) {
    setIsActive(index)
    setColorsObject(buy.colors)
    setQuantity(1)
  }

  function handleIncrement() {
    if (quantity < inventory.current[isActive]) {
      setQuantity(quantity + 1)
    }
  }

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  function handleBuy() {
    setShowBuyMessage(true)
    confetti({
      particleCount: 600,
      spread: 300,
    })
  }

  const disabled = {
    border: '1px solid var(--blue-solid-light)',
    opacity: 0.8,
  }

  return (
    <>
      <Container show={show}>
        <div className="content">
          {!!buy && (
            <>
              <div className="imagePlusQuantity">
                <Image
                  src={`/assets/png/${image.current[isActive]}`}
                  alt="Iphone"
                  width={475}
                  height={450}
                  objectFit="contain"
                  className="image"
                  quality={25}
                />
                <div className="quantity">
                  {Object.keys(colorsObject).map(
                    (color: any, index: number) => {
                      return (
                        index === isActive && (
                          <div key={index}>
                            <Button
                              disabled={quantity <= 1}
                              onClick={handleDecrement}
                            >
                              <FiMinus size={20} />
                            </Button>
                            <h3 className="quantityNumber">{quantity}</h3>
                            <Button
                              disabled={
                                inventory.current[isActive] === quantity ||
                                quantity >= inventory.current[isActive]
                              }
                              onClick={handleIncrement}
                            >
                              <MdAdd size={20} />
                            </Button>
                          </div>
                        )
                      )
                    },
                  )}
                </div>
                <h3 className="inventory">
                  Atualmente existem {inventory.current[isActive]} unidades em
                  estoque
                </h3>
              </div>
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
                                background: colorsObject[color].backgroundColor,
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
                                background: colorsObject[color].backgroundColor,
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
                  {buy.promotion ? (
                    <>
                      <div>
                        <h1 className="lined">
                          {parseFloat(
                            String(price.current * quantity),
                          ).toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </h1>
                        <h1>
                          {parseFloat(
                            String(
                              price.current * quantity -
                                (buy.promotion / 100) *
                                  price.current *
                                  quantity,
                            ),
                          ).toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </h1>
                      </div>
                      <div className="promotion">
                        <span>{buy.promotion.toFixed(2)}% OFF</span>
                      </div>
                    </>
                  ) : (
                    <h1>
                      {parseFloat(
                        String(price.current * quantity),
                      ).toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </h1>
                  )}
                </div>
                {inventory.current[isActive] === 0 ? (
                  <Button className="desktopButton" disabled>
                    Compra indisponível
                  </Button>
                ) : (
                  <Button className="desktopButton" onClick={handleBuy}>
                    Finalizar compra
                  </Button>
                )}
                {inventory.current[isActive] === 0 ? (
                  <Button className="mobileButton" disabled>
                    Compra indisponível
                  </Button>
                ) : (
                  <Button className="mobileButton" onClick={handleBuy}>
                    Finalizar compra por{' '}
                    {parseFloat(
                      String(price.current * quantity),
                    ).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </Container>
      <BuyMessage
        show={showBuyMessage}
        onClose={() => setShowBuyMessage(false)}
        buy={buy}
        image={image.current[isActive]}
        quantity={quantity}
      />
    </>
  )
}
