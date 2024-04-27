'use client'
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import {Item} from '../../components/ItemList'

export default function ProductPage(): JSX.Element {
    const searchParams = useSearchParams()
    const router = useRouter()
    const title: string = searchParams.get('title')!
    
    return (
        <div id='product'>
            <p>{title}</p>
            <div onClick={() => router.back()}>Voltar</div>
        </div>
    )
}