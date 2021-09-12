import DataSheet from "./components/DataSheet";
import Svg from "./components/Svg";
import styled from "styled-components";

function App() {
  const elements = [
    {
      id: 1,
      nt1: 100,
      prof1: 1.3,
      nt2: 99,
      prof2: 1,
      dist: 80,
      diam: 100,
    },
    {
      id: 2,
      nt1: 99,
      prof1: 1.3,
      nt2: 98,
      prof2: 1.3,
      dist: 60,
      diam: 100,
    },
    {
      id: 3,
      nt1: 98,
      prof1: 1.3,
      nt2: 95,
      prof2: 1.3,
      dist: 80,
      diam: 150,
    }
  ];

  return (
    <Wrapper>
      <Svg elements={elements} />
      <DataSheet elements={elements} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  justify-content: space-around;  
`;

export default App;
