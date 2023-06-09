import styled from 'styled-components';
import { Form } from 'formik';

export const Btn = styled.button`
  background-color: rgb(225, 223, 228);
  border: 1px solid gray;
  border-radius: 10%;
`;

export const PhoneForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 200px;

  gap: 10px;
  border: 2px solid black;

  margin-left: auto;
  margin-right: auto;
`;
