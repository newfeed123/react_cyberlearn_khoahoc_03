import { ADD_COMMENT } from "../types/FakeBookTypes";

const stateDefault = {
    comments: [
        {name: 'Yone', content: 'hi hi', avatar: 'https://i.pravatar.cc/150?u=yone'},
        {name: 'Yone123', content: 'hi hi 123', avatar: 'https://i.pravatar.cc/150?u=yone123'}
    ]
}

const FakeBookReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case ADD_COMMENT:
            state.comments = [...state.comments, action.userComment]
            return {...state}
    
        default:
            break;
    }

    return {...state}
}

export default FakeBookReducer