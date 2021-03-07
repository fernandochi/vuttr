import Organism from "./components/organism/app";
import styled from "styled-components";

const OuterDiv = styled.div`
  width: 80vw;
  margin: 16px auto;
`;

const App = () => {
  return (
    <OuterDiv>
      <Organism />
    </OuterDiv>
  );
};

export default App;
