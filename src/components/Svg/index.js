import styled from "styled-components";

const Svg = ({elements}) => {
  return (
    <> { elements && (
      <StyledSvg>
        { elements.map(el => console.log(el)) }
      </StyledSvg>
    )} </>
  );
}

const StyledSvg = styled.svg`
  margin: 16px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  width: 90%;
  flex: 2 1;
`;

export default Svg;