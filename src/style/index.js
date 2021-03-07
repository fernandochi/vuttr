import styled from "styled-components";

export const HeaderDiv = styled.header`
  h1 {
    text-align: left;
    font: normal normal 600 42px/50px Source Sans Pro;
    letter-spacing: 0.84px;
    color: #170c3a;
    opacity: 1;
  }
  h2 {
    text-align: left;
    font: normal normal 600 36px/40px Source Sans Pro;
    letter-spacing: 0.72px;
    color: #170c3a;
    opacity: 1;
  }
`;

export const SectionToSearch = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainSection = styled.main`
  display: grid;
  grid-template-rows: 20vh;
  grid-gap: 2vh;
  margin: 2vh auto;
`;

export const ButtonType = styled.button`
  text-align: center;
  font: normal normal 600 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  height: 23px;
  color: ${(props) => {
    if (props.which === "danger") {
      return "#F95E5A";
    } else if (props.which === "sucess") {
      return "#0DCB7D;";
    } else {
      return "#365DF0";
    }
  }};
  border-radius: 5px;
  border: ${(props) => {
    if (props.which === "danger") {
      return "1px solid #F95E5A";
    } else if (props.which === "sucess") {
      return "1px solid #0DCB7D;";
    } else {
      return "1px solid #365DF0";
    }
  }};
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const PageLayout = styled.div`
  max-width: 100vw;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
`;

export const CardDiv = styled.div`
  width: 100%;
  min-height: 20%;
  border: 1px solid black;
  padding: 4px;
  background-color: #eee;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p:nth-child(1) {
      font-size: 1.2rem;
    }
    p:nth-child(2) {
      font-size: 0.8rem;
      span {
        font-weight: bold;
      }
      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const ModalSection = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  background-color: white;
  border: 2px solid #000;
  padding: 2px 4px 3px;
  transform: translate(-50%, -50%);
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 4px auto;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
    }
    div:last-child {
      margin: 8px;
      align-self: flex-end;
    }
  }
`;
