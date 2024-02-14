import Link from 'next/link'

type PageIdProps = {
    params: {
        id: string
    }
}

export default function ProfileId(props: PageIdProps) {
    const currentpage = `/profiles/${props.params.id}`
    return (
        <main>
            <h1>This is the page for {props.params.id}</h1>
            <Link
                href={`${currentpage}/posts`}
                className="bg-neutral-700 px-2 py-1"
            >
                See posts by {props.params.id}
            </Link>
        </main>
    )
}
