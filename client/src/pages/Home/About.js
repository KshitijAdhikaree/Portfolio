import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottieURL, description1, description2 } = about;
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[60vh] w-1/2 sm:w-full">
          <lottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-khaki text-justify">{description1 || ""}</p>
          <p className="text-khaki text-justify">{description2 || ""}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I’ve been working with recently:
        </h1>

        <div className="flex flex-wrap gap-12 mt-6 ">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-8 rounded-xl ">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
