const Lines = ({x1, x2, nt1, nt2, prof1, prof2, diam, yScale}) => {
  let x1topo = x1+0.6*(-yScale);
  let x1fundo = (prof1 > 1.3 ? 0.3 : 0)*(-yScale) + x1topo;

  return (
    <g>
      <line // Linha do terreo
        x1={x1topo} x2={x2}
        y1={nt1*yScale} y2={nt2*yScale}
        stroke="#660000" strokeWidth={1} 
      />
      <line // Geratriz superior do tubo
        x1={x1fundo} x2={x2}
        y1={(nt1-prof1+diam/1000)*yScale} y2={(nt2-prof2+diam/1000)*yScale}
        stroke="red" strokeWidth={0.5}
      />
      <line // Geratriz inferior to tubo e fundo da vala
        x1={x1fundo} x2={x2}
        y1={(nt1-prof1)*yScale} y2={(nt2-prof2)*yScale}
        stroke="black" strokeWidth={0.5}
      />

    </g>
  );
};

export default Lines;