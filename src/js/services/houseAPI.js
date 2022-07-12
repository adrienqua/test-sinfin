import axios from "axios"
import { apiUrl } from './../../config'

const apiEndpoint = apiUrl + "houses"

export function getHouse(id) {
    return axios.get(apiEndpoint + "/" + id).then((response) => response.data)
}

