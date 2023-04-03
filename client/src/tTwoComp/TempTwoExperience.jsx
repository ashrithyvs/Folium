export default function TempOneProjects({ templateData }) {
  const { experience } = templateData;
  return (
    <div
      id="experience"
      className="px-24 my-12 flex flex-col items-center space-y-12"
    >
      <span className="bg-transparent text-white tracking-widest text-3xl ">
        EXPERIENCE
      </span>
      <div className="flex flex-wrap justify-evenly">
        {experience.length !== 0 &&
          experience.map((item, idx) => {
            return (
              <div className="bg-[#1b2232] m-3 container 2xl:w-1/2 md:px-8 xl:px-8 py-10 rounded-2xl flex flex-col items-center justify-center space-y-6">
                <span className="bg-transparent text-white tracking-widest text-3xl ">
                  {item.experienceField}
                </span>
                <span className="text-center font-normal text-xl tracking-wide">
                  {item.org}
                </span>
                <div className="w-1/3 flex justify-evenly font-semibold p-2 border-white border-[1px] rounded-lg">
                  <span>{item.from}</span>
                  <span>-</span>
                  <span>{item.to}</span>
                </div>
                <p className="bg-transparent text-center"> {item.desc} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
