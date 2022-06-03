import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { includes } from "lodash"
import Layout from '../components/layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
