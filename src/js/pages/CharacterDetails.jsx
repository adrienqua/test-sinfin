import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../common/Loader";
import TableInfos from "../common/TableInfos";
import { getCharacter } from './../services/charactersAPI';
import { getHouse } from './../services/houseAPI';

const CharacterDetails = (props) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [character, setCharacter] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
       fetchCharacter()
    }, [])

    
    /** Fetch a character from the API */
    const fetchCharacter = async () => {
        try { 
            setCharacter(await getCharacter(id))
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
                    <div className="character-details text-center ">
                        <button onClick={() => navigate(-1)} className="btn btn-light">
                        Back
                        </button>
                        <div className="character-title">
                            <h1>{character.name}</h1>
                        </div>
                        <div className="table-infos row col-md-6 d-flex mx-auto">
                        <table className="table rounded-container">
                            <tbody>
                                <TableInfos title="Gender" data={character.gender} />
                                <TableInfos title="Culture" data={character.culture} />
                                <TableInfos title="Born" data={character.born} />
                                <TableInfos title="Died" data={character.died} />
                                <TableInfos title="Titles" data={character.titles} />
                                <TableInfos title="Aliases" data={character.aliases} />
                                <TableInfos title="Tv Show appearances" data={character.tvSeries} />
                                <TableInfos title="Played by" data={character.playedBy} />
                            </tbody>
                            </table>
                        </div>
                    </div>
            )
            }
        </div>
    )
}

export default CharacterDetails;