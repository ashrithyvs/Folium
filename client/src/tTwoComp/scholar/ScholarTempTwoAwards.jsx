export default function ScholarTempTwoAwards({ templateData }) {
  const { awards } = templateData;
  return (
    <div
      id="awards"
      className=" px-24 my-12 flex flex-col items-center space-y-12"
    >
      <span className="bg-transparent text-white tracking-widest text-3xl ">
        AWARDS
      </span>
      <div className="container flex flex-wrap justify-evenly">
        {awards.length !== 0 &&
          awards.map((item, idx) => {
            return (
              <div
                style={{ backgroundColor: templateData.navColor }}
                className="border-[1px] px-8 w-[30%] py-10 m-3 rounded-2xl flex flex-col items-center justify-center space-y-3"
              >
                <span className="bg-transparent text-white tracking-wider font-medium text-2xl">
                  {item.name}
                </span>
                <span className="text-center">
                  {item.agency} - {item.year}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
