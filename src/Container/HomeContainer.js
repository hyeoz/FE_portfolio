import Info from "../components/Info";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import SkillStack from "../components/Stack";

const HomeContainer = () => {
  return (
    <>
      {/* Nav */}
      <NavBar />
      {/* Info */}
      <Info />
      {/* Project - 간단히, -> 누르면 상세 페이지로 */}
      <Project />
      {/* Stack */}
      <SkillStack />
    </>
  );
};

export default HomeContainer;
