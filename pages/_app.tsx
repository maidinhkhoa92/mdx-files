import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { includes } from "lodash"
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  if (includes(pathname, "admin")) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
  
  return <Component {...pageProps} />
}

export default MyApp
