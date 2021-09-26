const PV = ({x1, x2, nt1, nt2, prof1, prof2, diam, yScale}) => {
  let x2Topo = x1+0.6*(-yScale)
  let x2Fundo = (prof1 > 1.3 ? 0.3 : 0)*(-yScale) + x2Topo;

  return (
    <g>
      <path // Contorno do PV
       stroke="grey" fill="none" strokeWidth={0.5} 
        d={`
          M${x1} ${nt1*yScale} 
          L${x2Topo} ${nt1*yScale}
          ${x2Topo < x2Fundo ? (
            `L${x2Topo} ${(nt1-1.3+0.05)*yScale} L${x2Fundo} ${(nt1-1.3-0.05)*yScale}`
          ) : "" }
          L${x2Fundo} ${(nt1-prof1)*yScale}
          L${x1} ${(nt1-prof1)*yScale}
          L${x1} ${nt1*yScale}
        `}
      />
      <line // Linha do fundo do PV
        stroke="black" strokeWidth={1} 
        x1={x1} y1={(nt1-prof1-0.05)*yScale}
        x2={x2Fundo} y2={(nt1-prof1-0.05)*yScale}
      />
    </g>
  );
};

export default PV;