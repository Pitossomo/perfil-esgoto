import styled from "styled-components";
import { Header } from "./Header";

export const rowRenderer = (props) => {
  console.log(props.children);
  
  return(
    <tr>
      {props.children}
    </tr>
  )
}

export const sheetRenderer = (props) => (
  <StyledSheet>
    <Header />
    <tbody>
      {props.children}
    </tbody>
  </StyledSheet>
);

// Style for Sheet elements
const StyledSheet = styled.table`
  border-spacing: 0px;
  border: 1px solid #cccccc;
  border-collapse: collapse;
  
  th, td {
    padding: 0;
    margin: 0;
    border-spacing: 0px;
    border: 1px solid #cccccc;
    border-collapse: collapse;
    width: 45px;
  }

  td {
    text-align: right;
  }

  input {
    padding: 0;
    border: 0;
    margin: 0;
    text-align: right;
    max-width: 40px;
  }
`;