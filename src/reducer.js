export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    // token: 'BQDdlbHCooEANn-YgxJRkA9O2l-VtBtCrQ8fAY_D-C6IV9x9E4fo2M8JuZLp8L0-GNA-kTMvzq2OYlpw0tEAL7_lMNQxeUFV0zImclzQdgtwSq8th1Q7DOaFS0bORKE_zLEH8yXc3NdydpOXGZpgSYEiOec',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,

            }
        default:
            return state;
    }
}

export default reducer;