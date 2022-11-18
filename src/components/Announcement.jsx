import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    width: 100vw;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <div>
        <Container>Super deal Free Shipping delivery and upto flat 30% off on your First Item!</Container>
    </div>
  )
}

export default Announcement