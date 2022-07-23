import '../styles/globals.css'
import {MetamaskProvider} from "../helpers/ConnectMetamask";


function MyApp({ Component, pageProps }) {
  return <MetamaskProvider>
  <Component {...pageProps} />
  </MetamaskProvider>
}

export default MyApp
