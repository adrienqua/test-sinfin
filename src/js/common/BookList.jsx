import React, { useState, useEffect } from "react"
import BookListItem from './BookListItem'

const BookList = ({datas}) => {
    
    return (
        <div className="book-list">
        <table className="table text-center align-middle rounded-container">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Pages</th>
                    <th scope="col">Author</th>
                    <th scope="col">Release date</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {datas.map((data) => (
                    <BookListItem data={data} key={data.id}/>
                ))} 
            </tbody>
            </table>
        </div>      
    )
}

export default BookList