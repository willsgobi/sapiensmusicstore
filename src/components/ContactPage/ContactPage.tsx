import Head from "next/head";
import Text from "../../languages/language";
import Content from "../Content/Content";
import styles from './ContactPage.module.scss'

export default function ContactPage() {

    async function sendContact() {
        event.preventDefault();
    }

    return (
        <Content id="contact">
            <>
                <Head>
                    <title>Contact | Sapiens Music Store</title>
                </Head>
                <div className={styles.sectionContact}>
                    <form className={styles.formContact} onSubmit={sendContact}>
                        <h2>| Contact Us</h2>
                        <input required placeholder={`${Text("placeholder_name", "pt-br")}`} />
                        <input type={"email"} required placeholder={`${Text("placeholder_email", "pt-br")}`} />
                        <select required placeholder="Select an option">
                            <option value="" disabled selected>Choose your option</option>
                            <option value={1}>By a product</option>
                            <option value={2}>More informations about the company</option>
                            <option value={3}>Info</option>
                        </select>
                        <textarea required maxLength={5000} placeholder={`${Text("placeholder_message", "pt-br")}`} rows={10} cols={5}></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </>
            
        </Content>
    )
}