import React from 'react'
import pokemons from '../src/infra/services/pokemons'
import IPokemons from '../src/types'
import styled from 'styled-components'
import { Container, Content, Footer, Head } from '../src/components'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 50px;
`

export async function getStaticProps() {
  const allPokemons = await pokemons.getAll()

  return {
    props: {
      allPokemons,
    },
  }
}

interface IPokemonProps {
  pokemons: IPokemons
}

const Info: React.FC<IPokemonProps> = ({ pokemons }) => (
  <Container>
    <Head title="info" />

    <Content>
      <Title>test</Title>
      <ul>
        {pokemons?.results.map((item) => (
          <li key={item.name}>
            <Link href={`/pokemon/${item?.name}`}>{item?.name}</Link>
          </li>
        ))}
      </ul>
    </Content>
    <Footer />
  </Container>
)

export default Info
