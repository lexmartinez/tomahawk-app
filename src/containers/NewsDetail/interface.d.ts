interface NewsDetailProps {
    uid: string,
    title: string,
    author: string,
    image: string,
    published_at: number,
    url: string,
    summary: string
}

interface NewsDetailState {
    sticky: boolean
}
