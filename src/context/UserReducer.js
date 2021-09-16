const reducer = (globalState, action) => {

    switch (action.type) {
        case "READ_USERS":
            return {
                ...globalState,
                users: action.payload
            }
        case "ADD_USER":
            return {
                ...globalState,
                users: [action.payload, ...globalState.users]
            }
        case "DELETE_USER":
            console.log(action.payload)
            return {
               users: globalState.users.filter( users => users.id !== action.payload)
            }
        default:
            return globalState
    }

}

export default reducer