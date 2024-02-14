import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <h1 className="mb-6">Hello World, nice to meet you!</h1>
            <Link href="/profiles" className="bg-neutral-700 px-2 py-1">
                Go to Profiles
            </Link>
        </main>
    )
}
