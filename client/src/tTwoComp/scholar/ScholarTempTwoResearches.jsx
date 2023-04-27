export default function ScholarTempTwoResearches({ templateData }) {
  const { researches } = templateData;
  return (
    <div
      id="researches"
      className="px-24 my-12 flex flex-col items-center space-y-12"
    >
      <span className="bg-transparent text-white tracking-widest text-3xl ">
        RESEARCHES
      </span>
      <div className="flex flex-wrap justify-evenly">
        {researches.length !== 0 &&
          researches.map((item, idx) => {
            return (
              <div
                style={{ backgroundColor: templateData.navColor }}
                className="m-3 border-[1px] 2xl:w-[48%] md:px-8 xl:px-8 py-10 rounded-2xl flex flex-col items-center justify-center space-y-6"
              >
                <span className="bg-transparent text-white tracking-widest text-3xl ">
                  {item.title}
                </span>
                {/* <span className="text-center font-normal text-xl tracking-wide">
                  {item.org}
                </span> */}
                {/* <div className="w-1/3 flex justify-evenly font-semibold p-2 border-white border-[1px] rounded-lg">
                  <span>{item.from}</span>
                  <span>-</span>
                  <span>{item.to}</span>
                </div> */}
                <p className="bg-transparent text-center"> {item.desc} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
