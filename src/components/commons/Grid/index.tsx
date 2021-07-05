import React from 'react'
import styled from 'styled-components'

const GridElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`

interface GridProps {
  children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <GridElement>{children}</GridElement>
}

export default Grid
