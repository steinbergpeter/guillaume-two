'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Profiles() {
    const router = useRouter()

    return (
        <main className="flex flex-col justify-start items-start gap-4">
            <h1>My list of profiles</h1>
            <Link href="/profiles/peter" className="bg-neutral-700 px-2 py-1">
                Go to Peter&#39;s Profile
            </Link>
            <Link href="/profiles/jane" className="bg-neutral-700 px-2 py-1">
                Go to Jane&#39;s Profile
            </Link>
        </main>
    )
}
