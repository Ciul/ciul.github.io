import C from '../include/constants'

export const addPost = ({
    title   = '[NEW POST]',
    content = '[NEW POST CONTENT]'
} = {}) => {
    return {
        type: C.ADD_POST,
        payload: { title, content }
    }
}

export const removePost = (_id) => {
    return {
        type: C.REMOVE_POST,
        payload: {
            _id: _id
        }
    }
}