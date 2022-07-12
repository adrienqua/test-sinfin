import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const BookListItem = ({data}) => {

    return (
        <tr className="book-list-item">
            <td scope="col">{data.name}</td>
            <td scope="col">{data.numberOfPages}</td>
            <td scope="col">{data.authors}</td>
            <td scope="col">{data.released}</td>
            <td scope="col"><Link to={`/books/${data.id}`} className="btn btn-primary">Details</Link></td>
        </tr>
    )
}

export default BookListItem;