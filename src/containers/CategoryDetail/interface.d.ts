interface CategoryDetailProps {
    category: any,
    error: boolean,
    games: any,
    loading: boolean,
    getCategoryGames(category:number, page:number) : void
}

interface CategoryDetailState {
    page: number
}
