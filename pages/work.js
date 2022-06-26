import Head from 'next/head'
import { WorkHeader, Projects } from '../components'

export default function Work() {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
                <meta name='description' content="Codigo's work page" />
                <title>Work &#x2022; Codigo</title>
            </Head>

            <WorkHeader />

            <Projects />
        </>
    )
}
