
import axios from "axios"


const POKEAPI_URL= "https://pokeapi.co/api/v2"

const pokemonApi = axios.create({
    baseURL: POKEAPI_URL
})

export default pokemonApi;