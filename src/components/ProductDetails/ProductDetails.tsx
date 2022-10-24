/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import Content from "../Content/Content"
import styles from './ProductDetails.module.scss'

interface ProductDetailsProps {
    id: string | number
}

export default function ProductDetails(props: ProductDetailsProps) {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<string>();
    const [showFullImage, setShowFullImage] = useState<boolean>();

    async function getProductById() {
        try {
            const response = await fetch(`/api/productsById?id=${props.id}`)
            const json = await response.json();

            setProduct(json);
            setSelectedImage(json.images[0])
        } catch (e) {
            console.log(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductById();
    }, [])

    if (props.id == null) {
        return <Content id="notFound"><p>Product Not Found!</p></Content>
    }

    if (loading) return <Content id="loading"><p>Loading...</p></Content>

    return (
        <Content id="productDetails">
            {
                product && (
                    <div className={styles.contentDetails}>
                        <h3>| {product.name}</h3>
                        <p className={styles.color}>Color: {product.color}</p>
                        <div className={styles.sectionDetails}>
                            <div className={styles.images}>
                                <div className={styles.thumbailsImage}>
                                    {
                                        product.images.map((item: string, index: number) => {
                                            return (
                                                <div key={index} className={styles.thumbail} onClick={() => setSelectedImage(item)}>
                                                    <img src={item} alt={item + index} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.selectedImage} onClick={() => {
                                    setShowFullImage(true)
                                    document.body.style.overflow = "hidden";
                                }}>
                                    <img src={selectedImage} alt="product" />
                                </div>
                            </div>
                            <div className={styles.buy}>
                                <p className={styles.price}>$ {product.price.toFixed(2)}</p>
                                <button className={styles.buyNow}>Buy now</button>
                                <button className={styles.wishList}>Add to wishlist</button>
                            </div>
                        </div>
                        <h3>| Description:</h3>
                        <div className={styles.descriptions}>
                            {
                                product.spec.map((item, index) => {
                                    return <p key={index}>{item}</p>
                                })
                            }
                        </div>

                        <Link href={"/products"}>
                            <span className={styles.backToList}>Back to list</span>
                        </Link>

                        {
                            showFullImage && (
                                <div className={styles.fullImage}>
                                    <div className={styles.fullImageClose} onClick={() => {
                                        document.body.style.overflow = "scroll";
                                        setShowFullImage(false)
                                    }}></div>
                                    <img src={selectedImage} alt="Image Selected" />
                                </div>
                            )
                        }
                    </div>
                )
            }
        </Content >
    )
}