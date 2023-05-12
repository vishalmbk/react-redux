import { buy_Book } from "./BookTypes";


const initialState = {
    NumberOfBooks: 50
}

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_Book: return {
            ...state, NumberOfBooks: state.initialState - 1
        }

        default:
            return state;
    }
}

export default BookReducer;