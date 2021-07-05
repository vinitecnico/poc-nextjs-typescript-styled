import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavElement = styled.nav`
  padding: 20px;
  background: #111;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  a {
    padding: 10px 0;
    margin: 0 15px 0 0;
    white-space: nowrap;
    color: #fff;
  }
  a:hover {
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`

const Header: React.FC = () => {
  return (
    <section>
      <NavElement>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="https://nextjs.org/docs">
          <a>Docs</a>
        </Link>
        <Link href="/pokemon/bulbasaur">
          <a>pokemons</a>
        </Link>
        <Link href="/info">
          <a>info</a>
        </Link>
      </NavElement>
    </section>
  )
}

export default Header
