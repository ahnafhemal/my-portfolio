import profileImage from "../../assets/img/my-bg.png";
import "./Home.css";
import resume from "../../assets/img/demo.pdf";

const Home = () => {
  return (
    <div className="mt-20 container mx-auto max-w-[1170px] flex flex-col lg:flex-row items-center gap-5">
      <div className="flex-1 space-y-3 flex flex-col items-center lg:items-start">
        <h4 className="text-2xl text-[#0c0336] ">I am,</h4>

        <h2 className="title font-bold text-2xl lg:text-5xl text-[#F88567] uppercase">
          <span className="title-word title-word-1">Ahnaf</span>
          <span> </span>
          <span className="title-word title-word-2">Hasan</span>
        </h2>
        <p className="text-[#0c0336]  text-lg leading-8">
          Greetings. Ahnaf is here, a Web Designer developer since 2023. I am
          experienced with HTML5, CSS3,and JavaScript, ES6. I can design a
          stunning web application with JS and CSS frameworks like React and
          Tailwind, Material UI, and Bootstrap. I work with Nodejs, Expressjs,
          MongoDB, etc.
        </p>
        <a href={resume} download>
          <button className="uppercase buttonDownload">Download resume</button>
        </a>
      </div>
      <div className="flex-1  flex justify-center">
        <img className="w-screen" src={profileImage} alt="" />
      </div>
    </div>
  );
};

export default Home;

// container mx-auto max-w-[1170px]
