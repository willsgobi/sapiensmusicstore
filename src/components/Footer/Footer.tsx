import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href={"https://instagram.com/willsgobi"} target="_blank">
                <em>Created by William Sgobi - All rights reserved</em>
            </Link>
        </footer>
    )
}