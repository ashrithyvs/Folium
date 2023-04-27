export default function ScholarTempOneSubjects({ templateData }) {
  const { subjects } = templateData;
  return (
    <div
      id="subjects"
      className=" px-24 my-12 flex flex-col items-center space-y-12"
    >
      <span className="bg-transparent text-white tracking-widest text-3xl ">
        SUBJECTS
      </span>
      <div className="container flex flex-wrap justify-evenly">
        {subjects.length !== 0 &&
          subjects.map((item, idx) => {
            return (
              <div className="border-[1px] px-8 w-[30%] py-10 m-3 rounded-2xl flex flex-col items-center justify-center space-y-3">
                <span className="bg-transparent text-white tracking-wider font-medium text-2xl">
                  {item.SubjectField}
                </span>
                <span className="text-center">{item.mastery}%</span>
                <span className="text-center">{item.exp} years</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
