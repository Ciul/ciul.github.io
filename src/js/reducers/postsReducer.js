import C from '../include/constants'
import post from './postReducer'

export default (state = {}, action) => {
    const { type, payload } = action
    switch(type) {
        case C.ADD_POST:
            return [
                ...state,
                post({}, action)
            ]
            break;
        case C.REMOVE_POST:
            return state.filter((p) => (payload._id !== p._id) )
            break;
    }

    return state
}