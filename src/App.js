import { DataSheet, Svg, Buttons } from "./components";
import ElementsProvider from "./providers/ElementsProvider"
import styled from "styled-components";

function App() {
  return (
    <ElementsProvider>
      <Wrapper>
        <DataSheet/>
        <Buttons />
        <Svg />
      </Wrapper>
    </ElementsProvider>
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
