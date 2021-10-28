import { useState } from 'react'
import type { AppProps } from 'next/app'

import { Context } from '../contexts/context'

import '../styles/globals.scss'
import Buy from '../components/Buy'

function MyApp({ Component, pageProps }: AppProps) {
  const [buyState, setBuyState] = useState(false)
  const [buyData, setBuyData] = useState<any>()

  function handleSetBuyStateAndData(state: boolean, buy?: object) {
    setBuyState(state)
    setBuyData(buy)
  }

  return (
    <Context.Provider value={{ buyState, buyData, handleSetBuyStateAndData }}>
      <Component {...pageProps} />
      {buyData && <Buy buy={buyData} show={buyState} />}
    </Context.Provider>
  )
}
export default MyApp
