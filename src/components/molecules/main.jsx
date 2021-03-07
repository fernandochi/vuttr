import { MainSection } from "../../style";
import Cards from "../atoms/cards";

const Main = ({ sites }) => {
  return (
    <MainSection>
      {sites.map(({ id, title, link, description, tags }) => {
        return (
          <Cards
            key={id}
            title={title}
            description={description}
            tags={tags}
            link={link}
            id={id}
          />
        );
      })}
    </MainSection>
  );
};

export default Main;
