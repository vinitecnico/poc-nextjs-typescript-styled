import axios from 'axios'
import IPokemons from '../../../types'
import IPokemonDetails from '../../../types'

const api = axios.create({
  baseURL: process.env.apiUrl,
})

const getAll = async () => {
  return api.get<IPokemons>('').then(({ data }) => data)
}

const getDetails = async (name: string) => {
  return api.get<IPokemonDetails>(`/${name}`).then(({ data }) => data)
}

export default { 
  getAll, 
  getDetails 
}
