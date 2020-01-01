import * as actionTypes from '../actions/actionTypes';

const initialState = {
    text: '',
    loading: false,
    list: []
}

const userInputReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case actionTypes.SEARCH_TEXT_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SEARCH_TEXT_SUCCESS:
            return {
                ...state,
                list: action.list
            }
        case actionTypes.SEARCH_TEXT_FAILURE:
            return state
        default:
            return state;
    }
}

export default userInputReducer;