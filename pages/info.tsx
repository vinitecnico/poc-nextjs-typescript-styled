import React, { useState, useEffect } from 'react'
import getAll from '../src/clients'
import IDescriptions from '../src/models'
import styled from "styled-components";
import { Container, Content, Footer, Head } from '../src/components'
import Link from 'next/link';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export async function getStaticProps() {
  const pokemons = await getAll()

  return {
    props: {
      pokemons,
    },
  }
}

interface IPokemonProps {
  pokemons: IDescriptions
}

const Sobre: React.FC<IPokemonProps> = ({ pokemons }) => {
  // const [pokemons, setPokemons] = useState<IDescriptions>()
  // const getUser = async () => {
  //   const result = await getAll();
  //   setPokemons(result)
  // };

  // useEffect(() => {
  //   getUser()
  // }, [])

  return (
    <Container>
      <Head title="info" />

      <Content>
        <Title>test</Title>
        <ul>
          {
            pokemons?.pokemon_entries.map((item, index) => (
              <li key={item.entry_number}>
                <Link href={`/pokemon/${item.entry_number}`}>
                  {item?.pokemon_species?.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </Content>
      <Footer />
    </Container>
  )
}

export default Sobre