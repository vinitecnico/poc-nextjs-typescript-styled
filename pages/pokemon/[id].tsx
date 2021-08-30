import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import pokemons from '../../src/infra/services/pokemons'
import IPokemonDetails from '../../src/types'
import DocsLayout from '../../src/components/Layout/DocsLayout'
import Image from 'next/image'
import styles from './styles'

const Pokemon: { Layout?: React.ReactNode } = () => {
  const router = useRouter()
  const { id } = router.query

  const name = id?.toString()
  const [pokemon, setPokemon] = useState<IPokemonDetails>()

  const init = async () => {
    if (name) {
      const result = await pokemons.getDetails(name)
      setPokemon(result)
    }
  }

  useEffect(() => {
    init()
  }, [id])

  return (
    <styles.Card>
      <span>#1</span>
      <div>
        <Image
          alt="Vercel Logo"
          title="Vercel Logo"
          src={pokemon?.sprites?.front_default || 'https://picsum.photos/150/270'}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1>{id}</h1>
    </styles.Card>
  )
}

Pokemon.Layout = DocsLayout
export default Pokemon
