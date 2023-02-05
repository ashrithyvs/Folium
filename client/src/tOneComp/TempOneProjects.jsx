export default function TempOneProjects({ templateData }) {
  const { projects } = templateData;
  return (
    <div id="projects" className="flex space-x-6 px-24 justify-evenly">
      {projects.length !== 0 &&
        projects.map((item, idx) => {
          return (
            <div className="bg-[#1b2232] container 2xl:w-1/2 md:px-8 xl:px-8 py-10 rounded-2xl flex flex-col items-center justify-center space-y-6">
              <a
                target="_blank"
                className="bg-transparent text-white tracking-widest text-3xl "
                href={item.url}
                rel="noreferrer"
              >
                {item.title}
              </a>
              <img alt={item.title} src={item.imageUrl} />
              <div className="w-1/3 flex justify-evenly font-semibold p-2 border-white border-[1px] rounded-lg">
                <span>{item.from}</span>
                <span>-</span>
                <span>{item.to}</span>
              </div>
              <span className="text-center font-semibold tracking-wide">
                {item.tech}
              </span>
              <p className="bg-transparent text-center"> {item.desc} </p>
            </div>
          );
        })}
      {/* <div className="bg-[#1b2232] container 2xl:w-1/2 md:px-8 xl:px-8 py-10 rounded-2xl flex flex-col items-center justify-center space-y-6">
        <a
          target="_blank"
          className="bg-transparent text-white underline text-3xl "
          href={templateData.projectOneUrl}
          rel="noreferrer"
        >
          {templateData.projectOneTitle}
        </a>
        <img
          alt={templateData.projectOneTitle}
          src={templateData.projectOneImage}
        />
        <p className="bg-transparent"> {templateData.projectOneText} </p>
      </div>
      <div className="bg-[#1b2232] container 2xl:w-1/2 md:px-8 xl:px-8 py-10 rounded-2xl  flex flex-col items-center justify-center space-y-6">
        <a
          target="_blank"
          className="bg-transparent text-white underline text-3xl "
          href={templateData.projectTwoUrl}
          rel="noreferrer"
        >
          {templateData.projectTwoTitle}
        </a>
        <img
          alt={templateData.projectTwoTitle}
          src={templateData.projectTwoImage}
        />
        <p className="bg-transparent"> {templateData.projectTwoText} </p>
      </div>
      <div className="bg-[#1b2232] container 2xl:w-1/2 md:px-8 xl:px-8 py-10 rounded-2xl  flex flex-col items-center justify-center space-y-6">
        <a
          target="_blank"
          className="bg-transparent text-white underline text-3xl "
          href={templateData.projectThreeUrl}
          rel="noreferrer"
        >
          {templateData.projectThreeTitle}
        </a>
        <img
          alt={templateData.projectThreeTitle}
          src={templateData.projectThreeImage}
        />
        <p className="bg-transparent"> {templateData.projectThreeText} </p>
      </div> */}
    </div>
  );
}
