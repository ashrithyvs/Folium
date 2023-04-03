import TempTwoNavbar from "../tTwoComp/TempTwoNavbar";
import TempTwoAbout from "../tTwoComp/TempTwoAbout";
import TempTwoProjects from "../tTwoComp/TempTwoProjects.jsx";
import TempTwoFooter from "../tTwoComp/TempTwoFooter";
import TempTwoEducation from "../tTwoComp/TempTwoEducation";
import TempTwoSkills from "../tTwoComp/TempTwoSkills";
import TempTwoExperience from "../tTwoComp/TempTwoExperience";
import { mainProfile } from "../utils/api.js";
import { useEffect, useState } from "react";
import ConvertToHtml from "../utils/ConvertToHtml";
export const TempTwoWrapper = ({ templateData }) => {
  console.log(templateData);
  return (
    <div className="bg-[#111827] text-white">
      <TempTwoNavbar templateData={templateData} />
      <TempTwoAbout templateData={templateData} />
      <TempTwoEducation templateData={templateData} />
      <TempTwoExperience templateData={templateData} />
      <TempTwoSkills templateData={templateData} />
      <TempTwoProjects templateData={templateData} />
      <TempTwoFooter templateData={templateData} />
    </div>
  );
};

export const Temp2 = () => {
  const [templateData, setTemplateData] = useState();

  useEffect(() => {
    mainProfile()
      .then((res) => {
        setTemplateData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {templateData && (
        <div className="flex flex-col justify-center">
          <TempTwoWrapper templateData={templateData} />
          <button
            className="custom-btn-outline inline px-4 mx-auto my-6"
            onClick={() => {
              ConvertToHtml(templateData, TempTwoWrapper);
            }}
          >
            Generate HTML
          </button>
        </div>
      )}
    </div>
  );
};
