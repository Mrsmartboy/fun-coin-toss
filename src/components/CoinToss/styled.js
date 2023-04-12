import styled from 'styled-components'

export const CoinTossContainer= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(#e2a139,#f9d423);
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
`

export const Header = styled.h1`
color: #a35200;
font-size: 25px;
font-weight: bold;

`

export const Para = styled.p`
  color: #334155;
  font-size: 20px;
`

export const CoinImage = styled.img`
height: 200px;
width: 200px;
margin: 10px;

`

export const TossButton = styled.button`
   background-color: #f9d423;
   border-radius: 10px;
   color: #a35200;
   font-size: 15px;
   font-weight: bold;
   padding:10px ;
   border: none;
   outline: none;
   cursor: pointer;
`

export const TossContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   @media screen and (max-width:576px){
    flex-direction: column;
    justify-content: center;
   }
`


export const Para1 = styled.p`
   color: #334155;
   font-size: 15px;
   font-weight: 500;

`