export default function TempOneProjects({ templateData }) {
  const { skills } = templateData;
  return (
    <div
      id="skills"
      className=" px-24 my-12 flex flex-col items-center space-y-12"
    >
      <span className="bg-transparent text-white tracking-widest text-3xl ">
        SKILLS
      </span>
      <div className="container flex flex-wrap justify-evenly">
        {skills.length !== 0 &&
          skills.map((item, idx) => {
            return (
              <div className="bg-[#1b2232] px-8 w-1/3 py-10 m-3 rounded-2xl flex flex-col items-center justify-center space-y-3">
                <span className="bg-transparent text-white tracking-wider font-medium text-2xl">
                  {item.SkillField}
                </span>
                <span className="text-center">{item.exp} years</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
