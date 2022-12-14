import Content from '../components/Content/Content'
import Text from '../languages/language'
import Head from 'next/head'

export default function About() {
    return (
        <Content id='about'>
            <>
            <Head>
                <title>About | Sapiens Music Store</title>
            </Head>
                <h2>| About Us</h2>
                <p style={{ whiteSpace: "pre-line" }}>{Text("about", "pt-br")}</p>
            </>
        </Content>
    )
}
