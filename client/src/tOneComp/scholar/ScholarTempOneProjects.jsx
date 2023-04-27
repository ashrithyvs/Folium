export default function ScholarTempOneProjects({ templateData }) {
  const { projects } = templateData;
  return (
    <div id="projects" className="flex space-x-6 px-24 my-24 justify-evenly">
      {projects.length !== 0 &&
        projects.map((item, idx) => {
          return (
            <div
              key={idx}
              className="border-[1px] container 2xl:w-1/2 md:px-8 xl:px-8 py-10 rounded-2xl flex flex-col items-center justify-center space-y-6"
            >
              <a
                target="_blank"
                className="bg-transparent text-white tracking-widest text-3xl "
                href={item.url}
                rel="noreferrer"
              >
                {item.title}
              </a>
              <div className="w-1/3 flex justify-evenly p-2 border-white border-[1px] rounded-lg">
                <span>
                  {item.duration} months - {item.status}
                </span>
              </div>
              <span className="text-center font-semibold tracking-wide">
                {item.fundingAgency} - Rs.{item.sanctionedAmount}
              </span>
              <p className="bg-transparent text-center"> {item.others} </p>
            </div>
          );
        })}
    </div>
  );
}
