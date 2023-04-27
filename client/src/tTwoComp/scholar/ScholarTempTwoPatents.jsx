export default function ScholarTempTwoPatents({ templateData }) {
  const { patents } = templateData;
  return (
    <div
      id="patents"
      className=" px-24 my-12 flex flex-col items-center space-y-12"
    >
      <span className="bg-transparent text-white tracking-widest text-3xl ">
        PATENTS
      </span>
      <div className="container flex flex-wrap justify-evenly">
        {patents.length !== 0 &&
          patents.map((item, idx) => {
            return (
              <div
                style={{ backgroundColor: templateData.navColor }}
                className="border-[1px] px-8 w-[30%] py-10 m-3 rounded-2xl flex flex-col items-center justify-center space-y-3"
              >
                <span className="bg-transparent text-white tracking-wider font-semibold text-3xl">
                  {item.title}
                </span>
                <span className="text-center text-lg">{item.inventors}</span>
                <span className="text-center">
                  {item.appNum} - {item.status}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
