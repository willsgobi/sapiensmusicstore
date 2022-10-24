import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Content from '../Content/Content'
import ProductCard from '../ProductCard/ProductCard';
import styles from './AllProducts.module.scss'

export default function AllProducts() {

    const [products, setProducts] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingFilters, setLoadingFilters] = useState<boolean>(false)
    const [showClearFilters, setShowClearFilters] = useState<boolean>(false)
    const [filters, setFilters] = useState<boolean>(false)
    const [filteredList, setFilteredList] = useState(null)
    const [productsList, setProductsList] = useState(null)
    const [categories, setCategories] = useState(null)
    const [brands, setBrands] = useState(null)

    type FilterCategory = "category" | "brand" | "clear"

    async function getFilterDatas() {
        try {
            const responseCategories = await fetch('/api/categories');

            const jsonCategories = await responseCategories.json();

            setCategories(jsonCategories)

            const responseBrands = await fetch('/api/brands');

            const jsonBrands = await responseBrands.json();

            setBrands(jsonBrands)
        } catch(e) {
            setLoading(false)
        } finally {
            setFilters(!filters)
            setLoadingFilters(false)
        }
    }

    async function getProducts() {
        try {
            const response = await fetch('/api/products?dynamic=true');

            const json = await response.json();

            setProducts(json)
            setProductsList(json)
        } catch(e) {
        } finally {
            setLoading(false)
        }
    }

    function filterProducts(id: number, type: FilterCategory) {
        if(type == "clear") {
            setProductsList(products)
        } else if(type == "category") {
            let list = products.filter(c => c.category == id)
            setFilteredList(list);
            setProductsList(list);
        } else {
            let list = products.filter(c => c.brand == id)
            setFilteredList(list);
            setProductsList(list);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    if(loading) return <div className={styles.loading}>Loading...</div>


    return <Content id="allProducts">
        <>
            <Head>
                <title>All Products | Sapiens Music Store</title>
            </Head>
            <h3>| All products</h3>
            <div className={styles.filterBy}>
                <h4 onClick={() => {
                    getFilterDatas()
                }}>| Open filters {showClearFilters && <span className={styles.clearFilter} onClick={() => {
                    filterProducts(0, "clear")
                    setShowClearFilters(false)
                    }}>Clear Filter</span>}</h4>
                {   loadingFilters ? <div><span>Loading filter data...</span></div> :
                    filters && 
                    <>
                    <h5>Category:</h5>
                    <div className={styles.filterTag}>
                        {
                            categories && categories.map((item: any, index: any) => {
                                return (<span className={styles.filters} key={index} onClick={() => {
                                    setShowClearFilters(true);
                                    filterProducts(item.id, "category")
                                }}>{item.name}</span>)
                            })
                        }                        
                    </div>
                    <h5>Brand:</h5>
                    <div className={styles.filterTag}>
                        {
                            brands && brands.map((item: any, index: number) => {
                                return (<span className={styles.filters} key={index} onClick={() => {
                                    setShowClearFilters(true);
                                    filterProducts(item.id, "brand")
                                }}>{item.name}</span>)                                
                            })
                        }                        
                    </div>
                </>
                }
            </div>
            <div className={styles.contentProducts}>      
            {
                    productsList.map((item: any, index: number) => {
                        return (
                            <ProductCard index={index} item={item} />
                        )
                    })    
                } 
            </div>
        </>
    </Content>
}