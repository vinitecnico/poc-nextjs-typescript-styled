import React, { useState, useEffect } from 'react'
import getAll from '../src/clients'
import IDescriptions from '../src/models'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Sobre = () => {
  const [pokemons, setPokemons] = useState<IDescriptions>()
  const getUser = async () => {
    const result = await getAll();
    setPokemons(result)
  };

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <Title>test</Title>
      <ul>
        {
          pokemons?.pokemon_entries.map((item, index) => (
            <li key={item.entry_number}>
              {item?.pokemon_species?.name}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Sobre