import * as actionTypes from './actions'
const initialState = {
    title: "Add Your Name",
    isTrue: false,
    result: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TITLE":
            return {
                ...state,
                title: "Changed Title"
            }
        case "GETDATA": {
            return {
                ...state,
                result: state.result.concat(action.payload)
            }
        }
        default:
            return state
    }
}
export default reducer;