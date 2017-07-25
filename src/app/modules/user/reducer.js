const initialState = {
    name:   null,
    status: null
}

const userReducer = (currentUser = initialState, action) => {
    const { type, payload } = action

    switch(type) {
        
    }

    return currentUser
}

export default userReducer