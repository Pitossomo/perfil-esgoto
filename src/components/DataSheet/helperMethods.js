import styled from "styled-components";
import { Header } from "./Header";
import { columns } from "./columns";

export const rowRenderer = (props) => {
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

export const objectToGrid = (object) => {
  let grid = [];
  object?.forEach( (el) => {
    let row = [];
    columns.map( col => row.push({ value: col.gridValue(el) }));
    grid.push(row);
  });
  return grid;
}

export const cellChangesHandler = (changes, grid, elements, setElements) => {
  let newElements = [...elements];
  changes.forEach(({ cell, row, col, value }) => {
    let colInfo = columns[col];
    newElements[row] = { ...elements[row] }
    if (colInfo.type === "number") newElements[row][colInfo.name] = Number(value);
  });

  setElements(newElements);
}  


// Style for Sheet elements
const StyledSheet = styled.table`
  border-spacing: 0px;
  border: 1px solid #cccccc;
  border-collapse: collapse;

  td, th {
    padding: 2px;
    margin: 0;
    border-spacing: 0px;
    border: 1px solid #cccccc;
    border-collapse: collapse;
    width: 45px;
  }

  td { text-align: right; }

  th { text-align: center; }

  input {
    padding: 0;
    border: 0;
    margin: 0;
    text-align: right;
    max-width: 40px;
  }
`;