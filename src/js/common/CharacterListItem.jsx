import React from "react"
import { Link } from 'react-router-dom';


const CharacterListItem = ({id, name, titles}) => {

    return (
        <div className="col-lg-4 col-md-6">
            <Link to={`/characters/${id}`} className="character-list-item rounded-container m-0 ">
                <h6>{name}</h6>
                <p>{titles[0]}</p>
            </Link>
        </div>                 
    )
}

export default CharacterListItem;