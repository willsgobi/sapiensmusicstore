import { useEffect, useState } from "react"
import Image from 'next/image'
import styles from './Banner.module.scss'
import Link from "next/link";

export default function Banner() {

    const [currentIndex, setCurrentIndex] = useState<any>(0)
    
    let imageListBanner = [
        "/images/lp-banner.jpg",
        "/images/acoustic-banner.jpg",
        "/images/drum-banner.jpg",
    ];

    function getImageBanner() {
        return <Image id="imageBanner" src={imageListBanner[currentIndex]} alt="banner" layout='fill' className={styles.imageBanner} />           
    }

    useEffect(() => {
        let interval: any;

        interval = setInterval(() => {           
            var banner = document.getElementById("banner");
            var images = document.getElementById("imageBanner");

            banner.removeChild(images);

            if(currentIndex + 1 > 2) {
                setCurrentIndex(0)
            } else {                 
                setCurrentIndex(currentIndex + 1);
            }            

            banner.appendChild(images)
        }, 5000)


        return () => {
            clearInterval(interval)
        }
    }, [currentIndex])

    return (
        <Link href={'products'}>
            <div id="banner" className={styles.banner}>
                 {getImageBanner()}
            </div>
        </Link>
    )
}