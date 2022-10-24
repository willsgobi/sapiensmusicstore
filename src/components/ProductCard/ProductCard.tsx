import styles from './ProductCard.module.scss'

interface ProductCardProps {
    index: number,
    item: any
}

import Link from "next/link";

export default function ProductCard({index, item}: ProductCardProps) {
    return <Link key={index} href={`products/${item.id}`}>
    <div className={styles.products} key={index}>
        <div className={styles.imageContent}>
            <img alt="Product images" src={item.images[0]} />
        </div>
        <p>{item.name}</p>
        <b>$ {item.price.toFixed("2")}</b>
    </div>
</Link>
}