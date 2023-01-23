import styled from "styled-components";
//import FundoBurguer from '../../Assets/fundoHamburguer.png';


export const Container = styled.div`
 
    
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    min-height: 100vh;
    background: #0A0A10;
    

`
export const Image = styled.img`
    width: 246px;
    height: 354px;
    margin: 0 84px 36px;
`

export const ContainerItens = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 414px;
    margin-top:50px;
    
`

export const H1 = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin: 5px 100px 5px;

`

export const ContainerOrders = styled.div`
    width: 342px;
    //height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin: 50px 36px 18px;
    display:grid;
    flex-direction: column;

    display: grid;
    grid-template-rows: auto;
    word-break: break-word;

    button{
   cursor: pointer;
   background: none;
   border: none;
}
`


export const OrderClient = styled.div`
padding: 10px 27px;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
`
export const NameClient = styled.div`
padding: 10px 27px;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;

`
export const ImageTrash = styled.img`
width: 24px;
height: 28px;
margin-left: 310px;


`

export const Button = styled.button`
width: 342px;
height: 68px;
background: rgba(255, 255, 255, 0.14);
margin: 20px 36px 56px;

font-weight: 700;
font-size: 17px;
line-height: 2px;
text-align: center;
color: #FFFFFF;

cursor: pointer;

&:hover{
   opacity:0.8 ;
}

&active{
   opacity:0.5 ;
}

`