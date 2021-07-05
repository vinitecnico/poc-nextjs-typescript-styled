import React from 'react'
import { getAll } from '../src/clients'
import IPokemons from '../src/models'
import styled from 'styled-components'
import { Container, Content, Footer, Head } from '../src/components'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 50px;
`

export async function getStaticProps() {
  const pokemons = await getAll()

  return {
    props: {
      pokemons,
    },
  }
}

interface IPokemonProps {
  pokemons: IPokemons
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
}

export default Sobre
