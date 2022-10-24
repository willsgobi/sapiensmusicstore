/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
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
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

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

    function ImageMagnifier({
        src,
        width,
        height,
        magnifierHeight = 200,
        magnifieWidth = 200,
        zoomLevel = 1.5
      }: {
        src: string;
        width?: string;
        height?: string;
        magnifierHeight?: number;
        magnifieWidth?: number;
        zoomLevel?: number;
      }) {
        
        return (
          <div
            className={styles.selectedImage}
            style={{
              position: "relative",
              height: height,
              width: width
            }}
          >
            <img
              src={src}
              style={{ height: height, width: width }}
              onMouseEnter={(e) => {
                // update image size and turn-on magnifier
                const elem = e.currentTarget;
                const { width, height } = elem.getBoundingClientRect();
                setSize([width, height]);
                setShowMagnifier(true);
              }}
              onMouseMove={(e) => {
                // update cursor position
                const elem = e.currentTarget;
                const { top, left } = elem.getBoundingClientRect();
      
                // calculate cursor position on the image
                const x = e.pageX - left - window.pageXOffset;
                const y = e.pageY - top - window.pageYOffset;
                setXY([x, y]);
              }}
              onMouseLeave={() => {
                // close magnifier
                setShowMagnifier(false);
              }}
              alt={"img"}
            />
      
            <div
              style={{
                display: showMagnifier ? "" : "none",
                position: "absolute",
      
                // prevent magnifier blocks the mousemove event of img
                pointerEvents: "none",
                // set size of magnifier
                height: `${magnifierHeight}px`,
                width: `${magnifieWidth}px`,
                // move element center to cursor pos
                top: `${y - magnifierHeight / 2}px`,
                left: `${x - magnifieWidth / 2}px`,
                opacity: "1", // reduce opacity so you can verify position
                border: "1px solid lightgray",
                backgroundColor: "white",
                backgroundImage: `url('${src}')`,
                backgroundRepeat: "no-repeat",
      
                //calculate zoomed image size
                backgroundSize: `${imgWidth * zoomLevel}px ${
                  imgHeight * zoomLevel
                }px`,
      
                //calculate position of zoomed image.
                backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
              }}
            ></div>
          </div>
        );
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
                        <Head>
                            <title>{product.name}</title>
                        </Head>
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
                                {
                                    ImageMagnifier({src: selectedImage})
                                }                                
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