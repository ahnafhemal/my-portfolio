import project1 from "../../assets/img/project (1).png";
import project2 from "../../assets/img/project (2).png";
import project3 from "../../assets/img/project (3).png";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto max-w-[1170px] my-10">
      <div className="space-y-4 mb-6 ">
        <h1 className="text-center text-[#07c7e9] text-3xl lg:text-4xl font-semibold">
          This is my Project
        </h1>
        <p className="text-center text-base lg:text-lg mx-5 lg:mx-28">
          My proficiency in key areas, demonstrating my ability to contribute
          effectively and add value <br /> to the team with my expertise and
          experience
        </p>
      </div>
      <div className="sm:mx-3 lg:mx-0 flex flex-col items-center gap-5">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center bg-[#1d1db219] p-5 rounded-md">
          <div className="w-full md:w-1/2 lg:w-1/3 flex-1">
            <img src={project1} alt="" />
          </div>
          <div className="space-y-5 flex-1">
            <h3 className="font-bold  text-xl lg:text-3xl">
              Community Food Sharing and Surplus Reduction Platform.
            </h3>
            <div className="des">
              Creating a platform for community food sharing surplus reduction
              involves highlighting foods that are commonly in surplus, easily
              shareable, and have a good shelf life.
            </div>
            <div className="flex gap-5">
              <div className="bg-[#f0be5273]  w-[80px] lg:w-[50px] h-[50px] flex items-center justify-center rounded-xl">
                <FaPersonCircleQuestion />
              </div>
              <div>
                <h4 className="text-xl">Mission</h4>
                <div className="des">
                  Collect food from donar,2 Transporting and Donate With
                  Volunteer
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-[#4dc84d74] w-[50px] h-[50px] flex items-center justify-center rounded-xl">
                <FaEarthAmericas />
              </div>
              <div>
                <h4 className="text-xl">Technology</h4>
                <ul className="grid grid-cols-3 gap-4">
                  <li className="bg-[#1818991f] p-1 rounded-md font-bold">
                    React
                  </li>
                  <li className="bg-[#995d181f] p-1 rounded-md font-bold">
                    Firebase
                  </li>
                  <li className="bg-[#1899231f] p-1 rounded-md font-bold">
                    Express Js
                  </li>
                  <li className="bg-[#9918381f] p-1 rounded-md font-bold">
                    Mongodb
                  </li>
                  <li className="bg-[#1818991f] p-1 rounded-md font-bold">
                    Tailwind
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center  gap-4">
              <a target="_blank" href="https://foodforhumanity-d0af8.web.app/">
                <button className="buttonLive flex items-center gap-2 p-1 rounded-md border-2 border-blue-300">
                  <CiLocationArrow1 className="text-lg" />
                  <div className="text">Live Site</div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/ahnafhemal?tab=repositories"
              >
                <button className="buttonCode flex items-center gap-2 p-1 rounded-md border-2 border-[#F78A6A]">
                  <FaGithub className="text-lg" />
                  <div className="text">View Code</div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center bg-[#1d1db219] p-5 rounded-md">
          <div className="space-y-5 flex-1">
            <h3 className="font-bold text-xl lg:text-3xl">
            Micro-Task and Earning Platform
            </h3>
            <div className="des">
            The Micro Tasking and Earning Platform is designed to provide users with opportunities to
            complete small tasks and earn rewards.
            </div>
            <div className="flex gap-5">
              <div className="bg-[#f0be5273]  w-[80px] lg:w-[50px] h-[50px] flex items-center justify-center rounded-xl">
                <FaPersonCircleQuestion />
              </div>
              <div>
                <h4 className="text-xl">Mission</h4>
                <div className="des">
                provide users with opportunities to
                complete small tasks and earn rewards.
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-[#4dc84d74]  w-[50px] h-[50px] flex items-center justify-center rounded-xl">
                <FaEarthAmericas />
              </div>
              <div>
                <h4 className="text-xl">Technology</h4>
                <ul className="grid grid-cols-3 gap-4">
                  <li className="bg-[#1818991f] p-1 rounded-md font-bold">
                    React
                  </li>
                  <li className="bg-[#995d181f] p-1 rounded-md font-bold">
                    Firebase
                  </li>
                  <li className="bg-[#1899231f] p-1 rounded-md font-bold">
                    Express Js
                  </li>
                  <li className="bg-[#9918381f] p-1 rounded-md font-bold">
                    Mongodb
                  </li>
                  <li className="bg-[#1818991f] p-1 rounded-md font-bold">
                    Tailwind
                  </li>
                  <li className="bg-[#5d5dfd1f] p-1 rounded-md font-bold">
                    Node Js
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center  gap-4">
              <a target="_blank" href="https://earnmicrobyte.web.app/">
                <button className="buttonLive flex items-center gap-2 p-1 rounded-md border-2 border-blue-300">
                  <CiLocationArrow1 className="text-lg" />
                  <div className="text">Live Site</div>
                </button>
              </a>
              <a target="_blank" href="https://github.com/ahnafhemal/MicroByte">
                <button className="buttonCode flex items-center gap-2 p-1 rounded-md border-2 border-[#F78A6A]">
                  <FaGithub className="text-lg" />
                  <div className="text">View Code</div>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex-1">
            <img src={project2} alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center bg-[#1d1db219] p-5 rounded-md">
          <div className="w-full md:w-1/2 lg:w-1/3 flex-1">
            <img src={project3} alt="" />
          </div>
          <div className="space-y-5 flex-1">
            <h3 className="font-bold text-xl lg:text-3xl">
            Mobile and IT devices repair and Selling shop
            </h3>
            <div className="des">
            Provide quick service process at  Store. Phixman is one of the best reasonable mobile phone service store. Chill we come to your Dropstep.
            </div>
            <div className="flex gap-5">
              <div className="bg-[#f0be5273]  w-[80px] lg:w-[50px] h-[50px] flex items-center justify-center rounded-xl">
                <FaPersonCircleQuestion />
              </div>
              <div>
                <h4 className="text-xl">Mission</h4>
                <div className="des">
                  Collect food from donar,2 Transporting and Donate With
                  Volunteer
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-[#4dc84d74]  w-[50px] h-[50px] flex items-center justify-center rounded-xl">
                <FaEarthAmericas />
              </div>
              <div>
                <h4 className="text-xl">Technology</h4>
                <ul className="flex gap-4">
                  <li className="bg-[#1818991f] p-1 rounded-md font-bold">
                    Html
                  </li>
                  <li className="bg-[#995d181f] p-1 rounded-md font-bold">
                    Css
                  </li>
                  <li className="bg-[#1899231f] p-1 rounded-md font-bold">
                    JavaScript
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center  gap-4">
              <a
                target="_blank"
                href="https://ahnafhemal.github.io/mobile-reaper/"
              >
                <button className="buttonLive flex items-center gap-2 p-1 rounded-md border-2 border-blue-300">
                  <CiLocationArrow1 className="text-lg" />
                  <div className="text">Live Site</div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/ahnafhemal/mobile-reaper"
              >
                <button className="buttonCode flex items-center gap-2 p-1 rounded-md border-2 border-[#F78A6A]">
                  <FaGithub className="text-lg" />
                  <div className="text">View Code</div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
