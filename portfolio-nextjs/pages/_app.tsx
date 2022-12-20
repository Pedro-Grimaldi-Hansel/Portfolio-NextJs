import '../styles/globals.scss'
import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400'
})


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
