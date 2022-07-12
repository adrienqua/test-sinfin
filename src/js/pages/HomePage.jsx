import React, { useState, useEffect } from "react"
import BookList from "../common/BookList"
import Loader from "../common/Loader";
import { getBooks } from './../services/booksAPI'
import { formatDate } from "../utils/formatDate";

const HomePage = (props) => {
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


     useEffect(() => {
        fetchBooks()
     }, [])

     
    /** Fetch and format the books from the API */
    const fetchBooks = async () => {
        try {
            const formatedBooks = await getBooks();

            formatedBooks.forEach(book => {
                return book.released = formatDate(book.released)
            })
            
            setBooks(formatedBooks)
            setIsLoaded(true)
        } catch (error) {
            console.log(error)
        }
      }


    return (
        <div className="homepage text-center">
            <h1>Home</h1>
            {!isLoaded 
            ? 
                <Loader />
            : 
                <BookList datas={books} />
            }
            
        </div>
    );
};

export default HomePage