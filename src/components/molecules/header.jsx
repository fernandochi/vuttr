import Description from "../atoms/description";
import Title from "../atoms/title";
import { HeaderDiv } from "../../style/index.js";

const Header = () => {
  return (
    <HeaderDiv>
      <Title />
      <Description />
    </HeaderDiv>
  );
};

export default Header;
