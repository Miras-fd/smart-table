export function initSearching(searchField) {
    return (query, state) => {
        return state[searchField]
            ? {
                ...query,
                q: state[searchField]
            }
            : query;
    };
}