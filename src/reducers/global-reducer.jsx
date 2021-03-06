const initialState = {
    isMobile: false,
    isDev: false,
    isPageLoaded: true,
    isAuthenticated: false,
    baseUrl: 'http://localhost:8080',
    currentUser: null,
    users: [],
    articles: []
}

const global = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_IS_MOBILE':
            return {
                ...state,
                isMobile: action.value
            }
        case 'UPDATE_IS_PAGE_LOADED':
            return {
                ...state,
                isPageLoaded: action.value
            }
        case 'UPDATE_IS_AUTHENTICATED':
            return {
                ...state,
                isAuthenticated: action.value
            }
        case 'UPDATE_CURRENT_USER':
            return {
                ...state,
                currentUser: action.value
            }
        case 'UPDATE_ALL_USERS':
            return {
                ...state,
                users: action.value
            }
        case 'UPDATE_ALL_ARTICLES':
            return {
                ...state,
                articles: action.value
            }
        default:
            return state
    }
}

export default global