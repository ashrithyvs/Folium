export default function TempOneProjects({ templateData }) {
  return (
    <div id="projects" className="flex space-x-6 px-24 justify-evenly">
      <div className="bg-[#1b2232] container 2xl:w-1/2 md:px-8 xl:px-8 py-10 rounded-2xl flex flex-col items-center justify-center space-y-6">
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
      </div>
    </div>
  );
}
