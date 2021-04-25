import styled from 'styled-components';

export const Content = styled.p`
  margin-top: 1.5rem;
`;

export const Container = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
`;

export const TextWrapper = styled.div`
  border-radius: 3rem;
  max-width: 400px;
`;

export const Cards = styled.div`
    text-align: center;
    padding: .5rem 0;
`;
export const Card = styled.div`
    transition: all .5s;
    cursor: pointer;
    border-radius: .5rem;
    :hover{
        background-color: #fff;
        box-shadow: .1rem .1rem .3rem rgba(0, 0, 0, 0.65);
        transform: translateY(-.5rem)
    }
`;
export const Or = styled.div`
  text-align: center;
  text-size: 1.5rem;
  padding: .5rem 0;
`;

export const I = styled.i`
    font-size: 1.12rem;
    display: block; 
    padding: .5rem 0 0 0;
`;