import html from "../../assets/img/html.png";

const CurrentlyExploring = () => {
  return (
    <div>
      <div id="skills" className=" container mx-auto max-w-[1170px]">
        <div className="space-y-4 mb-6">
          <h1 className="text-center text-[#07c7e9] text-3xl lg:text-4xl font-semibold">
            Currently Exploring
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
        </div>
      </div>
    </div>
  );
};

export default CurrentlyExploring;
