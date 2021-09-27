import styled from "styled-components";

const Infos = ({x1, x2, nt1, nt2, prof1, prof2, mat, diam, yScale, dist, yMin}) => {
  const LINE_HEIGHT = 2;
  
  return (
    <g>
      <line // Linha vertical inicial do trecho
        x1={x1} x2={x1}
        y1={yMin*yScale} y2={(yMin-LINE_HEIGHT*3)*yScale}
        stroke="black" strokeWidth={0.5} 
      />

      <text // Texto de distância 
        x={x1} y={(yMin-LINE_HEIGHT*1)*yScale}
      >
        {dist}
      </text>

      <text // Texto de especificação do tubo 
        x={x1} y={(yMin-LINE_HEIGHT*2)*yScale}
      >
        {diam} / {mat}
      </text>

      <text // Texto de declividade 
        x={x1} y={(yMin-LINE_HEIGHT*3)*yScale}
      >
        {(((nt1 - prof1) - (nt2 - prof2))/dist*100).toPrecision(3)}%
      </text>
      

    </g>
  );
};

const styledText = styled.text`
  font: 5px sans-serif;
`;

export default Infos;