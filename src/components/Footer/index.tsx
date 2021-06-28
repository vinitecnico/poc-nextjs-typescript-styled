import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const FooterElement = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`

const Footer: React.FC = () => {
  return (
    <FooterElement>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by I and{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </FooterElement>
  )
}

export default Footer
