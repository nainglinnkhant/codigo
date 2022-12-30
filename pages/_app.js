import { Poppins } from '@next/font/google'
import { Navbar, PageTransition } from '../components'
import '../styles/globals.scss'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
    return (
        <main className={poppins.className}>
            <PageTransition>
                <Navbar />
                <Component {...pageProps} />
            </PageTransition>
        </main>
    )
}

export default MyApp
