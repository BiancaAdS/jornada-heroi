import axios from "axios"

export const herosInstance = axios.create({
    baseURL: 'http://homologacao3.azapfy.com.br/api/ps/metahumans'
})