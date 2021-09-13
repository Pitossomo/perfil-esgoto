import styled from "styled-components";
// import ReactDataSheet from "react-datasheet";
//import { useState } from "react";

const DataSheet = ({elements}) => {
  const column = ["id","nt1","prof1","nf1","nt2","prof2","nf2","dist","diam","decl."];
  const DEC_DIGITS = 2;
  console.log(elements)

  return (
    <StyledSheet>
      <tr>
        <th>Id</th>
        <th>NTopo1</th>
        <th>Prof1</th>
        <th>NFund1</th>
        <th>NTopo2</th>
        <th>Prof2</th>
        <th>NFund2</th>
        <th>Dist.</th>
        <th>DN</th>
        <th>Decliv.</th>
        <th>Vazão</th>
        <th>Lâmina</th>
        <th>T.Trat.</th>
        <th>Veloc.</th>
      </tr>
      { elements.map(el => (
        <tr key={el.id}> 
          <TdCenter>{el.id}</TdCenter> 
          <TdRight>{el.nt1.toFixed(DEC_DIGITS)}</TdRight>
          <TdRight>{el.prof1.toFixed(DEC_DIGITS)}</TdRight>
          <TdRight>{(el.nt1-el.prof1).toFixed(DEC_DIGITS)}</TdRight>
          <TdRight>{(el.nt2).toFixed(DEC_DIGITS)}</TdRight>
          <TdRight>{(el.prof2).toFixed(DEC_DIGITS)}</TdRight>
          <TdRight>{(el.nt2-el.prof2).toFixed(DEC_DIGITS)}</TdRight>
          <TdRight>{(el.dist).toFixed(DEC_DIGITS)}</TdRight>
          <TdCenter>{(el.diam).toFixed(0)}</TdCenter>
          <TdRight>{(((el.nt1-el.prof1)-(el.nt2-el.prof2))/el.dist*100).toFixed(DEC_DIGITS)+"%"}</TdRight>
          <TdRight>{(el.vazao || 1.5).toFixed(DEC_DIGITS)+"%"}</TdRight>
          <TdRight>{80085}</TdRight>
          <TdRight>{80085}</TdRight>
          <TdRight>{80085}</TdRight>
        </tr>
      ))}
    </StyledSheet>
  );

/* Infos with ReactDataSheet Component
  const [grid, setGrid] = useState([
    [ elements.map(el => ([
      { value: el.id },   // id
      { value: el.nt1 },  // nt1
      { value: el.prof1 },  // prof1
      { value: el.nf1 },  // nf1
      { value: el.nt1 - el.prof1 }, // nf1
      { value: el.nt2 },    // nt2
      { value: el.prof2 },    // prof2
      { value: el.nt2 - el.prof2 },   // nf2
      { value: el.dist },     // dist
      { value: el.diam },     // dist
      { value: ((el.nt1 - el.prof1) - (el.nt2 - el.prof2))/el.dist }, //decl
    ]))],
  ]);

  console.log(grid)

  const onChange = changes => {
    const newGrid = grid.map(row => [...row]);
    changes.forEach(({cell, row, col, value}) => {
      newGrid[row][col] = {...newGrid[row][col], value};
    });
    setGrid({newGrid})
  }

  return (
    <StyledSheet
      data={grid}
      valueRenderer={cell => cell.value}
      onCellsChanged={changes => onChange(changes)}
    />
  );
*/
}

const StyledSheet = styled.table`
  width: 90%;
  
  table, th, td, tr {
    padding: 3px;
    border-collapse: collapse;
    border: 1px solid #cccccc;
  }
`;

const TdCenter = styled.td`
  text-align: center;
`;

const TdRight = styled.td`
  text-align: right;
`;

export default DataSheet;