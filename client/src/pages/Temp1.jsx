import TempOneNavbar from "../tOneComp/TempOneNavbar";
import TempOneAbout from "../tOneComp/TempOneAbout";
import TempOneProjects from "../tOneComp/TempOneProjects.jsx";
import TempOneFooter from "../tOneComp/TempOneFooter";
import TempOneEducation from "../tOneComp/TempOneEducation";
import TempOneSkills from "../tOneComp/TempOneSkills";
import TempOneExperience from "../tOneComp/TempOneExperience";
import { mainProfile, scholarProfile } from "../utils/api.js";
import { useContext, useEffect, useState } from "react";
import ConvertToHtml from "../utils/ConvertToHtml";
import { ResearchContext } from "../utils/ResearchContext";
import ScholarTempOneNavbar from "../tOneComp/scholar/ScholarTempOneNavbar";
import ScholarTempOneProjects from "../tOneComp/scholar/ScholarTempOneProjects";
import ScholarTempOneAwards from "../tOneComp/scholar/ScholarTempOneAwards";
import ScholarTempOnePatents from "../tOneComp/scholar/ScholarTempOnePatents";
import ScholarTempOneSubjects from "../tOneComp/scholar/ScholarTempOneSubjects";
import ScholarTempOneResearches from "../tOneComp/scholar/ScholarTempOneResearches";
export const TempOneWrapper = ({ templateData }) => {
  const { researches } = templateData;
  console.log(templateData);

  if (!researches) {
    return (
      <div className="bg-[#000000] text-white">
        <TempOneNavbar templateData={templateData} />
        <TempOneAbout templateData={templateData} />
        <TempOneEducation templateData={templateData} />
        <TempOneExperience templateData={templateData} />
        <TempOneSkills templateData={templateData} />
        <TempOneProjects templateData={templateData} />
        <TempOneFooter templateData={templateData} />
      </div>
    );
  }
  return (
    <div className="bg-[#000000] text-white">
      <ScholarTempOneNavbar templateData={templateData} />
      <TempOneAbout templateData={templateData} />
      <TempOneEducation templateData={templateData} />
      <TempOneExperience templateData={templateData} />
      <ScholarTempOnePatents templateData={templateData} />
      <ScholarTempOneResearches templateData={templateData} />
      <ScholarTempOneSubjects templateData={templateData} />
      <ScholarTempOneProjects templateData={templateData} />
      <ScholarTempOneAwards templateData={templateData} />
      <TempOneFooter templateData={templateData} />
    </div>
  );
};

export const Temp1 = () => {
  const [templateData, setTemplateData] = useState();
  const { isResearcher } = useContext(ResearchContext);

  useEffect(() => {
    if (isResearcher) {
      scholarProfile()
        .then((res) => {
          setTemplateData(res);
        })
        .catch((err) => console.log(err));
    } else {
      mainProfile()
        .then((res) => {
          setTemplateData(res);
        })
        .catch((err) => console.log(err));
    }
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
