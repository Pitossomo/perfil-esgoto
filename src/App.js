import { DataSheet, Svg, Buttons } from "./components";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [elements, setElements] = useState([
    {
      id: 1,
      nt1: 10,
      prof1: 1.3,
      nt2: 9,
      prof2: 1.8,
      dist: 80,
      diam: 100,
    },
    {
      id: 2,
      nt1: 9,
      prof1: 2,
      nt2: 8,
      prof2: 2,
      dist: 60,
      diam: 100,
    },
    {
      id: 3,
      nt1: 8,
      prof1: 2,
      nt2: 5,
      prof2: 1.3,
      dist: 80,
      diam: 150,
    }
  ]);

  return (
    <Wrapper>
      <DataSheet elements={elements} setElements={setElements}/>
      <Buttons />
      <Svg elements={elements} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;  
`;

export default App;
