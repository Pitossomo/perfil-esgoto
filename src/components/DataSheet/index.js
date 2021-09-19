import styled from "styled-components";
import ReactDataSheet from "react-datasheet";

const DataSheet = ({elements, children}) => {
  //const column = ["id","nt1","prof1","nf1","nt2","prof2","nf2","dist","diam","decl.","vazao", "yD", "ttrat", "veloc"];
  /*
  const onChange = changes => {
    const newGrid = grid.map(row => [...row]);
    changes.forEach(({cell, row, col, value}) => {
      newGrid[row][col] = {...newGrid[row][col], value};
    });
    setGrid({newGrid})
  }
  */

  let dataArray = [];
  elements?.map(el => { dataArray.push([
    { value: el.id },   // id
    { value: el.nt1 },  // nt1
    { value: el.prof1 },  // prof1
    { value: el.nt1 - el.prof1 },  // nf1
    { value: el.nt2 },    // nt2
    { value: el.prof2 },    // prof2
    { value: el.nt2 - el.prof2 },   // nf2
    { value: el.dist },     // dist
    { value: el.diam },     // dist
    { value: ((el.nt1 - el.prof1) - (el.nt2 - el.prof2))/el.dist }, //decl
  ])});
  console.log(dataArray);

  return (
    <StyledSheet
      data={dataArray}
      valueRenderer={cell => cell.value}
      sheetRenderer={(props) => (
        <table>
          <thead>
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
          </thead>
          <tbody>
            {props.children}
          </tbody>
        </table>
      )}
      //onCellsChanged={changes => onChange(changes)}
    />
  );

  /* 
  return (
    <StyledSheet>
      <thead>
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
      </thead>
      <tbody>
        { elements?.map(el => renderReadOnlyRow(el))}
      </tbody>
    </StyledSheet>
  );
 */

}

const StyledSheet = styled(ReactDataSheet)`
  width: 90%;
  
  table, th, td, tr {
    padding: 0;
    margin: 0;
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