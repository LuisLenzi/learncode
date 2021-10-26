import React from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'

import { FiSearch } from 'react-icons/fi'
import { BsHeadset } from 'react-icons/bs'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
              src="/assets/svg/logo.svg"
              alt="Learn Code Logo"
              width={115}
              height={98}
            />
          </div>
          <div className={styles.menu}>
            <h3>Departamentos</h3>
            <h3>Produtos</h3>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <FiSearch size={35} />
            <h3>Pesquisar</h3>
          </div>
          <div className={styles.contact}>
            <BsHeadset size={35} />
          </div>
        </div>
      </div>
    </div>
  )
}
