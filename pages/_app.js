import {IntlProvider} from 'react-intl'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale="en">
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
