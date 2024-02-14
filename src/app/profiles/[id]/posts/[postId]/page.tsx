type PostsPageProps = {
    params: {
        id: string
        postId: string
    }
}

export default function PostsPage({ params }: PostsPageProps) {
    return (
        <main>
            {params.id}&#39;s post #{params.postId} in detail
        </main>
    )
}
