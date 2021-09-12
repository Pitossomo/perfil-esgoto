import styled from "styled-components";

const Buttons = () => {
  return (
    <StyledDiv>
      <button>Carregar...</button>
      <button>Salvar...</button>
      <button>Gerar Perfil</button>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end; 
  width: 90%;
  margin-top: 16px;

  button {
    margin-left: 8px;
  }
`;

export default Buttons;