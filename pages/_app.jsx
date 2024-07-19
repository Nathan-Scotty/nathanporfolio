import 'normalize.css/normalize.css'
import Layout from '../components/Layout'
import '../styles/globals.css'

import {Roboto_Flex, Montserrat} from '@next/font/google'

const roboto = Roboto_Flex({subsets: ['latin']});
const montserrat = Montserrat({subsets: ['latin']});


export default function App({ Component, pageProps }) {

  return <>
  <style jsx global>
    {`
      html {
        font-family: ${roboto.style.fontFamily}
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: ${montserrat.style.fontFamily}
      }
    `}
  </style>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
}
