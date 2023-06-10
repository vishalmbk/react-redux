import { buy_Book, buy_pen } from "./BookTypes";


let initialState = {
    NumberOfBooks: 50,
    NumberOfPen: 20
}

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_Book: return {
            ...state, NumberOfBooks: state.NumberOfBooks - 1
        }
        case buy_pen: return {
            ...state, NumberOfPen: state.NumberOfPen - 2
        }

        default: return state;
    }
}

export default BookReducer;