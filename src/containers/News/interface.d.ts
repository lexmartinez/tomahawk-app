interface NewsProps {
    getNews(page:number) : void,
    loading: boolean,
    news: any[],
    error: boolean
}

interface NewsState {
    page: number
}