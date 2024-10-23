import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import bootstrap from "../../assets/img/figma.png";
import tailwind from "../../assets/img/download-removebg-preview.png";
import js from "../../assets/img/js.png";
import react from "../../assets/img/react.png";
import firebase from "../../assets/img/download-removebg-preview (1).png";
import express from "../../assets/img/express.png";
import node from "../../assets/img/node.png";
import mongoDb from "../../assets/img/mongobd.png";

const Skills = () => {
  return (
    <div id="skills" className=" container mx-auto max-w-[1170px]">
      <div className="space-y-4 mb-6">
        <h1 className="text-center text-[#07c7e9] text-3xl lg:text-4xl font-semibold">
          This is my Skills
        </h1>
        <p className="text-center text-base lg:text-lg mx-5 lg:mx-28">
          My proficiency in key areas, demonstrating my ability to contribute
          effectively and add value <br /> to the team with my expertise and
          experience
        </p>
      </div>

      <div className="mx-8 lg:mx-40 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center items-center cursor-pointer uppercase">
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-5 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-1/2" src={html} alt="" />
          <p>Html</p>
        </div>
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-5 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-1/2" src={css} alt="" />
          <p>Css</p>
        </div>
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-5 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-1/2" src={bootstrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-5 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-1/2" src={tailwind} alt="" />
          <p>Tailwind</p>
        </div>
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-5 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-1/2" src={js} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-6 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-[80px]" src={react} alt="" />
          <p>React</p>
        </div>
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-5 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-1/2" src={firebase} alt="" />
          <p>Firebase</p>
        </div>
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-5 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-[80px]" src={node} alt="" />
          <p>Node Js</p>
        </div>
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-7 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-[80px]" src={express} alt="" />
          <p>ExpressJs</p>
        </div>
        <div className="bg-[#00000026] w-[150px] flex flex-col items-center p-5 rounded-xl hover:bg-[#8b8be85a] text-lg font-bold text-[#100337] shadow-md">
          <img className="w-1/2" src={mongoDb} alt="" />
          <p>Mongo DB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
