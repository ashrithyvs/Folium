import TempOneNavbar from "../tOneComp/TempOneNavbar";
import TempOneAbout from "../tOneComp/TempOneAbout";
import TempOneProjects from "../tOneComp/TempOneProjects.jsx";
import TempOneFooter from "../tOneComp/TempOneFooter";
import TempOneEducation from "../tOneComp/TempOneEducation";
import TempOneSkills from "../tOneComp/TempOneSkills";
import TempOneExperience from "../tOneComp/TempOneExperience";
import { mainProfile } from "../utils/api.js";
import { useEffect, useState } from "react";
import ConvertToHtml from "../utils/ConvertToHtml";
export const TempOneWrapper = ({ templateData }) => {
  console.log(templateData);
  return (
    <div className="bg-[#111827] text-white">
      <TempOneNavbar templateData={templateData} />
      <TempOneAbout templateData={templateData} />
      <TempOneEducation templateData={templateData} />
      <TempOneExperience templateData={templateData} />
      <TempOneSkills templateData={templateData} />
      <TempOneProjects templateData={templateData} />
      <TempOneFooter templateData={templateData} />
    </div>
  );
};

export const Temp1 = () => {
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
          <TempOneWrapper templateData={templateData} />
          <button
            className="custom-btn-outline inline px-4 mx-auto my-6"
            onClick={() => {
              ConvertToHtml(templateData, TempOneWrapper);
            }}
          >
            Generate HTML
          </button>
        </div>
      )}
    </div>
  );
};
