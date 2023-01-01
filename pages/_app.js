import { Navbar, PageTransition } from '../components'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
    return (
        <PageTransition>
            <Navbar />
            <Component {...pageProps} />
        </PageTransition>
    )
}

export default MyApp
