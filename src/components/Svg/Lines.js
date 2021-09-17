const Lines = ({x1, x2, nt1, nt2, prof1, prof2, diam, yScale}) => (
  <g>
    <line 
      x1={x1} x2={x2}
      y1={nt1*yScale} y2={nt2*yScale}
      stroke="black" strokeWidth={2} 
    />
    <line 
      x1={x1} x2={x2}
      y1={(nt1-prof1+diam/1000)*yScale} y2={(nt2-prof2+diam/1000)*yScale}
      stroke="red" strokeWidth={1}
    />
    <line 
      x1={x1} x2={x2}
      y1={(nt1-prof1)*yScale} y2={(nt2-prof2)*yScale}
      stroke="black" strokeWidth={2}
    />

  </g>
)

export default Lines;