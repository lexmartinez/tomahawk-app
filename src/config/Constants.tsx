export const Colors = {
    black_20: 'rgba(10,10,10,0.2)',
    black_55: 'rgba(10,10,10,0.55)',
    grey_30: 'rgba(150,150,150,0.3)',
    grey_50: 'rgba(150,150,150,0.5)',
    primary_grey: '#454545',
    primary_red: '#E53935',
    secondary_red: '#C62828',
    transparent: 'transparent',
    white: '#FFFFFF',
    white_90: 'rgba(240,240,240,0.95)'
}

export const Fonts = {
    BOLD: 'WorkSans-Bold',
    LIGHT: 'WorkSans-Light',
    REGULAR: 'WorkSans-Regular',
    SEMIBOLD: 'WorkSans-SemiBold'
}

export const ActionTypes = {
    // Categories
    GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',
    GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
    GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
    // Games
    GET_GAMES_ERROR: 'GET_GAMES_ERROR',
    GET_GAMES_REQUEST: 'GET_GAMES_REQUEST',
    GET_GAMES_SUCCESS: 'GET_GAMES_SUCCESS',
    // News
    GET_NEWS_ERROR: 'GET_NEWS_ERROR',
    GET_NEWS_REQUEST: 'GET_NEWS_REQUEST',
    GET_NEWS_SUCCESS: 'GET_NEWS_SUCCESS'
}

export const API_URL = 'https://api-endpoint.igdb.com'
export const API_KEY = {'user-key' : 'YOUR-IGDB-API-KEY'}
