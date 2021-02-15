import styled from 'styled-components';

export const Container = styled.div`
  background-color: #3d3f43;
  padding: 20px;
  border-radius: 5px;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;

  input {
    background-color: #303236;
    border-radius: 5px;
    font-weight: 500;
    font-size: 15px;
    padding: 10px;
    outline: none;
    border: none;
    color: #fff;

    
    &::placeholder {
      color: #C4C8CA;
      font-size: 15px;
      font-weight: 500;
    }
  }
`;
