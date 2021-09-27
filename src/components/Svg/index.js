import React, { useState, useEffect, useRef, Fragment } from "react";
import styled from "styled-components";
import useElements from '../../hooks/elementsHooks'

import Lines from "./Lines";
import PV from "./PV"
import Infos from "./Infos"

const Svg = () => {
  const { elements } = useElements();

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
  var yMin = elements.reduce((currentMin, el) => Math.min(currentMin, el.nt1-el.prof1, el.nt2-el.prof2), 0);
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
              <Fragment key={el.id}>
                <PV
                  {...el}             
                  yScale={Y_SCALE}
                  x1={sumDist-el.dist} x2={sumDist}
                />
                <Lines
                  {...el}             
                  yScale={Y_SCALE}
                  x1={sumDist - el.dist} x2={sumDist}
                />
                <Infos
                  {...el}             
                  yScale={Y_SCALE}
                  yMin={yMin}
                  x1={sumDist - el.dist} x2={sumDist}
                />
              </Fragment>
            )
          })}
          <PV key={`PVLast`}
            yScale={Y_SCALE}
            x1={sumDist}
            nt1={elements[elements.length-1].nt2}
            prof1={elements[elements.length-1].prof2}
          />
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