import Link from 'next/link'

type PostsPageProps = {
    params: {
        id: string
    }
}

export default function PostsPage({ params }: PostsPageProps) {
    const currentpage = `/profiles/${params.id}/posts`
    return (
        <main>
            <h1>All of the posts for {params.id}</h1>
            <Link
                href={`${currentpage}/34`}
                className="bg-neutral-700 px-2 py-1"
            >
                Post #34
            </Link>
        </main>
    )
}
