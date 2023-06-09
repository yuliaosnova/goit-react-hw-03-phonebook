import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 300px;

  gap: 8px;

  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  margin-left: 8px;
  background-color: rgb(225, 223, 228);
  width: 15px;
  height: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(225, 223, 228);
  border: 1px solid gray;
  border-radius: 20%;
`;
