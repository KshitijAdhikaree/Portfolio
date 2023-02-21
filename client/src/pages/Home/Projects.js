import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  //Technology seperate garna
  const technologies = projects[selectedItemIndex].technologies;
  const technologyList = technologies.map((technology) => (
    <div
      key={technology}
      className="flex flex-row border border-tertiary py-3 px-3 rounded-lg "
    >
      {technology}
    </div>
  ));

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                     : "text-khaki"
                 } `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-90"
          />

          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {projects[selectedItemIndex].title}
            </h1>

            <div className="text-sm">
              <div className="flex flex-row gap-4 text-tertiary">
                {technologyList}
              </div>
            </div>

            <p className="text-khaki text-justify ">
              {projects[selectedItemIndex].description}
            </p>

            <a
              href={projects[selectedItemIndex].link}
              className="text-fifth text-xl text-center"
            >
              {projects[selectedItemIndex].link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
