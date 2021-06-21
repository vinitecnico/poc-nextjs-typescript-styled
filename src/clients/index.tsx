import axios from "axios"
import IDescriptions from '../models'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokedex'
})

const getAll = async () => {
  return api.get<IDescriptions>('/2/').then(({ data }) => data)
}

export default getAll