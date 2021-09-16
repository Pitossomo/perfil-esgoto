import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Svg = ({elements}) => {
  const DRAW_PADDING = 5;

  const svg = useRef();
  const linesGroup = useRef();
  const [viewBox, setViewBox] = useState(null);

  useEffect(() => {
    if (!svg.current) return;

    const { x, y, width, height } = linesGroup.current.getBBox();
    setViewBox([
      x-DRAW_PADDING, y-DRAW_PADDING, 
      width + 2*DRAW_PADDING, height + 2*DRAW_PADDING
    ].join(' '));
  }, [])

  return (
    <> { elements && (
      <StyledSvg ref={svg} viewBox={viewBox}>
        <g
          ref={linesGroup}
          stroke="black" stroke-width="0.5" stroke-miterlimit="10"
        >
          { elements.map(el => (
            <line key={el.id} 
              x1={el.nt1} x2={el.nt2} y1={el.nt1} y2={el.nt2} 
            />
          ))}
        </g>
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