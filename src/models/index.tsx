export default interface IDescriptions {
  pokemon_entries: IElements[]
  id: number
  name: string
}

interface IElements {
  entry_number: number
  pokemon_species: {
    name: string
    url: string
  }
}
