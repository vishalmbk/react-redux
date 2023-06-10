import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchase_book, purchase_pen } from './BookAction';

const BookContainer = () => {
    const noOfBooks = useSelector(state => state.NumberOfBooks)
    const noOfPens = useSelector(states => states.NumberOfPen)

    const dispatch = useDispatch()
    return (
        <>
            <div>BookContainer</div>
            <h3>No Of Books - {noOfBooks}</h3>
            <button onClick={() => { dispatch(purchase_book()) }}>Buy Book</button>
            <h3>No of Pens - {noOfPens}</h3>
            <button onClick={() => { dispatch(purchase_pen()) }}>Buy Pen</button>
        </>
    )
}

export default BookContainer;