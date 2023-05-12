import React from 'react'
import { useSelector } from 'react-redux';

const BookContainer = () => {
    const noOfBooks = useSelector(state => state.NumberOfBooks)
    return (
        <>
            <div>BookContainer</div>
            <h3>No Of Books - {noOfBooks}</h3>
        </>
    )
}

export default BookContainer;