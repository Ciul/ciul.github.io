import C from '../include/constants'

export default (state = {}, action) => {
    const { type, payload } = action
    switch(type) {
        case C.ADD_POST:
            return {
                ...payload
            }
            break;
    }

    return state
}