import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.scss'

export default function Header() {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (        
        <header className={styles.header}>
            <nav>
                <div>
                    <Link href={"/"}>
                        <div>
                            <Image src={"/images/logo.png"} alt="Logo image" width="50" height="50" style={{cursor: "pointer"}}/>  
                            <h2>Sapiens Music Store</h2>
                        </div>
                    </Link>
                </div>
                
                <div className={styles.links}>
                    <Link href={"products"}>
                        <p>Products</p>
                    </Link>
                    <Link href={"about"}>
                        <p>About Us</p>
                    </Link>
                    <Link href={"contact"}>
                        <p>Contact</p>
                    </Link>
                    <Link href={"findUs"}>
                        <p>Find Us</p>
                    </Link>
                </div>

                <div onClick={() => {setShowMenu(!showMenu)}} className={`${styles.menuMobile} ${showMenu ? styles.close : ''}`}>
                    <div className={showMenu ? styles.close : styles.line}></div>
                </div>

                {showMenu && <div className={styles.responsiveMenu}><Link href={"products"}>
                        <p>Products</p>
                    </Link>
                    <Link href={"about"}>
                        <p>About Us</p>
                    </Link>
                    <Link href={"contact"}>
                        <p>Contact</p>
                    </Link>
                    <Link href={"findUs"}>
                        <p>Find Us</p>
                    </Link></div>}
            </nav>
        </header>
    )
}