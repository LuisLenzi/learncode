import { useContext } from 'react'

import { GrClose } from 'react-icons/gr'

import { Context } from '../../../contexts/context'

import Image from 'next/image'

import { Container } from './styles'
import Button from '../../Button'

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
  image: string
  quantity: number
  show: boolean
  onClose: () => void
}

export default function BuyMessage({
  buy,
  quantity,
  image,
  show,
  onClose,
}: BuyProps) {
  const { handleSetBuyStateAndData } = useContext(Context)

  function handleClose() {
    handleSetBuyStateAndData(false)
    onClose()
  }

  return (
    <Container show={show}>
      <div className="close">
        <GrClose size={35} onClick={handleClose} />
      </div>
      <div className="content">
        <div className="messageBox">
          <h3>Valeu por comprar {quantity} unidades</h3>
          <div className="information">
            <h1>{buy.productName}</h1>
            <h3>{buy.description}</h3>
          </div>
          <Button onClick={handleClose}>Continue comprando</Button>
        </div>
        <Image
          src={`/assets/png/${image}`}
          alt="Iphone"
          width={475}
          height={450}
          objectFit="contain"
          className="image"
        />
      </div>
    </Container>
  )
}
