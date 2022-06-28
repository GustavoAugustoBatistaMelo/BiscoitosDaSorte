import styled from "styled-components";


/* .container{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
 }
 .img{
     width: 250px;
     height: 250px;
     margin-top: 50px;
 }
 .textoFrase{
     font-style: italic;
     color: #dd7b22;
     text-align: center;
 } */

 export const Container = styled.div `

        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
 
 
    `;

    export const Img = styled.img `
        width: 250px;
        height: 250px;
        margin-top: 50px;
}
    `;
    //pode passar valores via props para o estilo
    export const TextoFrase = styled.h3 `
        font-style: italic;
        color: ${props => `#${props.cor}`};
        text-align: center;
        font-size: ${props => `${props.font}px`}
        
    `;