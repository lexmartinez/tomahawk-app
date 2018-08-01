interface GamesProps {
    loading: boolean,
    games: any[],
    news: any[],
    error: boolean,
    getGames(page:number, query?:string) : void
}

interface GamesState {
    query?: string,
    page: number
}
