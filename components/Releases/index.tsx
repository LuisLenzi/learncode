import React, { useContext } from 'react'

import Image from 'next/image'

import Button from '../Button'

import { Context } from '../../contexts/context'

import styles from './Releases.module.scss'
interface ReleasesInterface {
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

interface ReleasesProps {
  releases: ReleasesInterface[]
}

export default function Releases({ releases }: ReleasesProps) {
  const { handleSetBuyStateAndData } = useContext(Context)

  return (
    <div className={styles.container}>
      <h1>Lançamentos</h1>
      {releases.map((release) => {
        return (
          <div
            className={styles.box}
            style={{
              backgroundColor: release.style.backgroundColor,
              boxShadow: `0px .25px 35px .25px ${release.style.backgroundColor}`,
            }}
            key={release.id}
          >
            <div className={styles.product}>
              <div className={styles.information}>
                <div
                  className={styles.title}
                  style={{ color: release.style.titleColor }}
                >
                  {release.productName}
                </div>
                <div
                  className={styles.description}
                  style={{ color: release.style.titleColor }}
                >
                  {release.description}
                </div>
              </div>
              <div className={styles.buy}>
                <Button onClick={() => handleSetBuyStateAndData(true, release)}>
                  Compre agora
                </Button>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src={`/assets/png/${release.style.image}`}
                alt="Learn Code Logo"
                width={247}
                height={268}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
