import React from 'react'
import styled from "styled-components"

const CardElement = styled.main`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid  ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <CardElement>
      {children}
    </CardElement>
  )
}

export default Card