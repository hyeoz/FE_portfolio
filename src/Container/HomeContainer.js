import { useRef, useState } from "react";
import Info from "../components/Info";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import SkillStack from "../components/Stack";

const HomeContainer = () => {
  const infoRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);

  const onInfoClick = () => {
    infoRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onProjectClick = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onSkillClick = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Nav */}
      <NavBar
        infoClick={onInfoClick}
        projectClick={onProjectClick}
        skillClick={onSkillClick}
      />
      {/* Info */}
      <Info infoRef={infoRef} />
      {/* Project - 간단히, -> 누르면 상세 페이지로 */}
      <Project projectRef={projectRef} />
      {/* Stack */}
      <SkillStack skillRef={skillRef} />
    </>
  );
};

export default HomeContainer;
