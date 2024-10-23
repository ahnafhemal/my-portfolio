import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-[#c4a8f964] dark:text-gray-600 mt-8">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 mb-5">
        <div className="lg:w-1/3 mt-5">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F97860] text-xl font-extrabold text-white">
              A
            </div>
            <span className="self-center text-2xl font-semibold">
              Ahnaf Hasan
            </span>
          </a>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 text-2xl">
          <li>
            <a rel="noopener noreferrer" href="https://x.com/Hemal87361352">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="https://github.com/ahnafhemal">
              <FaGithub />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              <CiFacebook />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ahnaf-hasan-477924229"
            >
              <CiLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
