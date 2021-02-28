import { adduser } from "../actions"

const intial_state = {

    users: [],
    currentUser: {'user':'','pwd':''}
}

export default (state = intial_state, action) => {


    switch (action.type) {


        case 'getUsers':

            return ({
                ...state,
                users: action.payload
            })
        case 'currentUser':

            return ({
                ...state,
                currentUser: action.payload
            })
    }

    return state
}