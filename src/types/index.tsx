export default interface IDescriptions {
  pokemon_entries: IElements[]
  id: number
  name: string
}

export default interface IPokemons {
  results: IResult[]
}

export default interface IPokemonDetails {
  sprites: { front_default: string }
}

interface IResult {
  name: string
  url: string
}

interface IElements {
  entry_number: number
  pokemon_species: {
    name: string
    url: string
  }
}
