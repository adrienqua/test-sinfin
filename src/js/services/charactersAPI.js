import axios from "axios"
import { apiUrl } from './../../config'

const apiEndpoint = apiUrl + "characters"


export function getCharacter(id) {
    return axios.get(apiEndpoint + "/" + id).then((response) => {
        response.data.id = response.data.url.split("/").pop()

        return response.data
    })
}

