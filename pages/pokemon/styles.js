import styled from 'styled-components'

export default {
  Card: styled.div`
    width: 18rem;
    margin: auto;
    background: #5bb0ca;
    color: #e4c439;
    padding: 1rem;
    border-radius: 10px;
    border-top: 0.5px solid #e4c439;
    border-bottom: 0.5px solid #e4c439;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s ease-in-out all;x-grow: 1;
    &:hover {
      transform: scale(1.05);
    }
    h1 {
      text-transform: capitalize;
      color: rgb(255, 255, 255);
      font-size: 2rem;
      font-weight: 700;
      margin-top: 0;
    }
    div {
      position: relative;
      width: 100px;
      height: 100px;
      max-height: 100px;
      max-width: 100px;
      margin: auto;
    }
    img {
      width: 150px;
      display: block;
      margin: auto;
    }
    span {
      background: #e4c439;
      width: 3rem;
      color: #fff;
      padding: 0.1rem;
      font-weight: 700;
      position: absolute;
      border-radius: 0 0 10px 0;
      top: 0;
      left: 0;
    }
  }
  `
}