import React from 'react'
import styled from "styled-components"

const ContainerElement = styled.main`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <ContainerElement>
      {children}
    </ContainerElement>
  )
}

export default Container