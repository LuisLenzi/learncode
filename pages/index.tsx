import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'

import Header from '../components/Header'
import Insights from '../components/Insights'
import Loading from '../components/Loading'
import Products from '../components/Products'
import Releases from '../components/Releases'

import { Product } from '../services/api'

import styles from '../styles/Home.module.scss'

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
  insights: ProductsInterface[]
  releases: ProductsInterface[]
  products: ProductsInterface[]
}

export default function Home({ insights, releases, products }: ProductsProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.insights}>
            <Insights insights={insights} />
          </div>
          <div className={styles.products}>
            <Products products={products} />
          </div>
        </div>
        <div className={styles.releases}>
          <Releases releases={releases} />
        </div>
      </div>
      <Loading show={loading} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProducts = await Product()

  const insights = allProducts.slice(0, 3)
  const releases = allProducts.slice(3, 6)
  const products = allProducts.slice(6, allProducts.length)

  return {
    props: {
      insights,
      releases,
      products,
    },
  }
}
