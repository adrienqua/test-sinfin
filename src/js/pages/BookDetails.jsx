import React, { useState, useEffect } from "react"
import { getBook } from "../services/booksAPI";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../common/Loader";
import TableInfos from "../common/TableInfos";
import { formatDate } from "../utils/formatDate";
import { getCharacter } from './../services/charactersAPI';
import CharacterListItem from "../common/CharacterListItem";

const BookDetails = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
       fetchBook()
    }, [])

    
    /** Fetch and format a book from the API */
    const fetchBook = async () => {
        try {
            const formatedBook = await getBook(id);

            formatedBook.released = formatDate(formatedBook.released)

            /** Fetch characters */
            const characterData = []
            for (let i=0; i<formatedBook.characters.length; i++) {
                const characterId = formatedBook.characters[i].split('/').pop()
                formatedBook.characters[i] = characterId

                characterData.push(await getCharacter(characterId)) 
                
            }

            setCharacters(characterData)
            setBook(formatedBook)
            setIsLoaded(true)
        } catch (error) {
            console.log(error)
        }
      }

    return (
        <div>
            {!isLoaded
            ?
                <Loader />
            : (
                <>
                    <div className="book-details text-center ">
                        <button onClick={() => navigate(-1)} className="btn btn-light">
                            Back
                        </button>
                        <div className="book-title">
                            <h1>{book.name}</h1>
                        </div>
                        <div className="table-infos row col-md-6 d-flex mx-auto">
                        <table className="table rounded-container">
                            <tbody>
                                <TableInfos title="Isbn" data={book.isbn} />
                                <TableInfos title="Authors" data={book.authors} />
                                <TableInfos title="Pages" data={book.numberOfPages} />
                                <TableInfos title="Publisher" data={book.publisher} />
                                <TableInfos title="Country" data={book.country} />
                                <TableInfos title="Type" data={book.mediaType} />
                                <TableInfos title="Release date" data={book.released} />                    
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="book-characters text-center">
                        <h3>Characters</h3>
                        <div className="row g-2 d-flex">
                            {characters.map((character) => (
                                <CharacterListItem id={character.id} name={character.name} titles={character.titles} key={character.id} />
                            ))}
                        </div>
                        
                    </div>
                </>
            )
            }
        </div>
    )
}

export default BookDetails;