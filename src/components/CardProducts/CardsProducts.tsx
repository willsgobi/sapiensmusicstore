import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './CardsProducts.module.scss'

export default function CardsProducts() {

    const [products, setProducts] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    async function getProducts() {
        try {
            const response = await fetch('/api/products?dynamic=true&maxLength=4');

            const json = await response.json();

            setProducts(json)
        } catch(e) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    if(loading) return <div className={styles.loading}>Loading...</div>

    return (
        <>
        <section className={styles.topProducts}>
            {
                products.map((item, index) => {
                    return (
                        <Link key={index} href={`products/${item.id}`}>
                            <div className={styles.products} key={index}>
                                <div className={styles.imageContent}>
                                    <Image alt="Product images" src={item.images[0]} layout='fill'/>
                                </div>
                                <p>{item.name}</p>
                                <b>$ {item.price.toFixed("2")}</b>
                            </div>
                        </Link>
                    )
                })    
            }            
        </section>
        <Link href={"products"}>
            <em className={styles.allProducts}>See all products</em>
        </Link>
        </>        
    )    
}