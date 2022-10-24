import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './TopProducts.module.scss'

export default function TopProducts() {

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
                products.map((item: any, index: any) => {
                    return (
                        <ProductCard index={index} item={item} />
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