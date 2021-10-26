import Image from 'next/image'
import Header from '../components/Header'
import Insights from '../components/Insights'
import Products from '../components/Products'
import Releases from '../components/Releases'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.insights}>
            <Insights />
          </div>
          <div className={styles.products}>
            <Products />
          </div>
        </div>
        <div className={styles.releases}>
          <Releases />
        </div>
      </div>
    </>
  )
}
