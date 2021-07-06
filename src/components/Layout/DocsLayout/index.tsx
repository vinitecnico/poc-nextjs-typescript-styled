import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const DocElement = styled.div`
  display: flex;
  section {
    width: 200px;
    padding: 20px;
    background: #fafafa;
    overflow-y: auto;
    flex: 0 0 170px;
  }
  article {
    justify-content: center;
    align-items: center;
    display: contents;
  }

  a {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }
`

interface DocsLayoutProps {
  children: React.ReactNode
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  const pokemons: string[] = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon']

  return (
    <DocElement>
      <section>
        <h3>Pokemons</h3>

        {pokemons.map((name) => (
          <div key={name}>
            <Link href={`/pokemon/${name}`}>
              <a>{name}</a>
            </Link>
          </div>
        ))}
      </section>
      <article>{children}</article>
    </DocElement>
  )
}

export default DocsLayout
