import styled from "styled-components";

const Svg = ({elements}) => {
  return (
    <StyledSvg>
      { elements.map(el => console.log(el)) }
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  border-radius: 5px;
  border: 1px solid #cccccc;
  width: 90vw;
  height: 65vh;
`;

export default Svg;