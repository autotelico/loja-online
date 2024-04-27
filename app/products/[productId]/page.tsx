import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import {Item} from '../../components/ItemList'

export default function ProductPage(): JSX.Element {
    const searchParams = useSearchParams()
    const router = useRouter()
    const title: string = searchParams.get('product')!
    
    return (
        <div id='product'>
            <p>{title}</p>
            <div onClick={() => router.back()}>Voltar</div>
        </div>
    )
}