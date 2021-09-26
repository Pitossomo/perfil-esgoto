import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Lines from "./Lines";
import useElements from '../../hooks/elementsHooks'

const Svg = () => {
  const { elements, setElements } = useElements();

  const Y_SCALE = -10; // Vertical exageration scale factor;

  const svg = useRef();
  const linesGroup = useRef();
  const [viewBox, setViewBox] = useState(null);
  const [stroke, setStroke] = useState(1);

  useEffect(() => {
    if (!svg.current) return;

    const { x, y, width, height } = linesGroup.current.getBBox();
    let padding = Math.max(width, height)*0.1;

    setStroke(Math.max(width,height)*0.01);

    setViewBox([
      x-padding, y-padding, 
      width + 2*padding, height + 2*padding
    ].join(' '));
  }, [elements])

  var sumDist=0;
  return (
    <> { elements && (
      <StyledSvg ref={svg} viewBox={viewBox}>
        <g
          ref={linesGroup}
          strokeWidth={stroke} strokeMiterlimit="10"
        >
          { elements.map(el => {
            sumDist = sumDist + el.dist;
            return (
              <Lines key={el.id}
                {...el}             
                yScale={Y_SCALE}
                x1={sumDist - el.dist} x2={sumDist}
              />
            )
          })}
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