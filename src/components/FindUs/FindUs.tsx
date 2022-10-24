import Head from "next/head";
import Content from "../Content/Content";

export default function FindUs() {
    return (
        <Content id="findUs">
            <>
                <Head>
                    <title>Find Us | Sapiens Music Store</title>
                </Head>
                <h2>| Find Us</h2>
                <h3>Heads up! This is a fictitious address, just to demonstrate what a site in production would look like!</h3>
            
                <p><b>Phone number:</b> (510) 888-9108</p>

                <p><b>Street:</b> 4116 Nichandros St</p>

                <p><b>City:</b> Castro Valley</p>

                <p><b>State:</b> California (CA)</p>

                <p><b>Zipcode:</b> 94546</p>

                <p><b>Country:</b> USA</p>

                <p><b>Address:</b> 4116 Nichandros St, Castro Valley, California 94546, USA</p>
                <br/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.804215408081!2d-122.07391332517427!3d37.700796816419796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f923b46b67769%3A0x6106b7f9564b88f7!2s4116%20Nichandros%20St%2C%20Castro%20Valley%2C%20CA%2094546%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1666377829803!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </>
        </Content>
    )
}