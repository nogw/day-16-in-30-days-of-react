import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Country = styled.div`
  background-color: #3d3f43;
  margin: 20px;
  padding: 20px; 
  border-radius: 10px;
  width: 240px;
  height: 285px;

  h1 {
    margin: 5px;
  }
`;

export const Image = styled.div`
  img {
    height: 120px;
    width: 200px;
  }
`;

export const Name = styled.div`
  font-size: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 5px;
  color: #fff;
  text-transform: uppercase;
`;

export const Capital = styled.div`
  h1 {
    font-size: 15px;
    color: #000;
    font-weight: 400;
    span {
      font-weight: 500;
    }
  }
`;

export const Language = styled.div`
  h1 {
    font-size: 15px;
    color: #000;
    font-weight: 400;
    span {
      font-weight: 500;
    }
  }
`;

export const Population = styled.div`
  h1 {
    font-size: 15px;
    color: #000;
    font-weight: 400;
    span {
      font-weight: 500;
    }
  }
`;
