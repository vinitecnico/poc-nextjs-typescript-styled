import React from 'react'
import styled from "styled-components"

const ContentElement = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <ContentElement>
      {children}
    </ContentElement>
  )
}

export default Content