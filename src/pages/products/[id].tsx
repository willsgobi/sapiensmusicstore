import { useRouter } from "next/router"
import ProductDetails from "../../components/ProductDetails/ProductDetails"

export default function Product() {
    const router = useRouter()
    const params = router.query

    if(params.id == undefined) return

    return <ProductDetails id={params.id[0]}/>
}