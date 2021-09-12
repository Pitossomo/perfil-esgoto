import styled from "styled-components";

const DataSheet = ({elements}) => {
  return (
    <StyledSheet>
      <tr>
        <th>Id Trecho</th>
        <th>NT1</th>
        <th>Prof1</th>
        <th>NF1</th>
        <th>NT2</th>
        <th>Prof2</th>
        <th>NF2</th>
        <th>Dist.</th>
        <th>Vazão</th>
        <th></th>


      </tr>
      { elements.map((el,i) => (
        <tr key={i}>
          <td>{i}</td>
          <td>{100-i}</td>
          <td>{i}</td>
          <td>{100-2*i}</td>
        </tr>
      ))}
    </StyledSheet>
  );
}

const StyledSheet = styled.div`
  border-radius: 5px;
  border: 1px solid #cccccc;
  width: 90%;
  flex: 2 1;
`;

export default DataSheet;