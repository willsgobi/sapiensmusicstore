import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './Header.module.scss'

export default function Header() {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const router = useRouter()

    function goTo(url: string) {
        router.back()
        router.push(window.location.origin + url)
    }

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

                {showMenu && 
                    <div className={styles.responsiveMenu}>                        
                        <p onClick={() => goTo("products")}>Products</p>
                        <p onClick={() => goTo("/about")}>About Us</p>
                        <p onClick={() => goTo("/contact")}>Contact</p>
                        <p onClick={() => goTo("/findUs")}>Find Us</p>
                    </div>}
            </nav>
        </header>
    )
}