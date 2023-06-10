import { buy_Book, buy_pen } from "./BookTypes";
export const purchase_book = () => {
    return {
        type: buy_Book
    }
}
export const purchase_pen = () => {
    return {
        type: buy_pen
    }
}

