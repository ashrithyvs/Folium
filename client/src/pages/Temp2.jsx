import TempTwoNavbar from "../tTwoComp/TempTwoNavbar";
import TempTwoAbout from "../tTwoComp/TempTwoAbout";
import TempTwoProjects from "../tTwoComp/TempTwoProjects.jsx";
import TempTwoFooter from "../tTwoComp/TempTwoFooter";
import TempTwoEducation from "../tTwoComp/TempTwoEducation";
import TempTwoSkills from "../tTwoComp/TempTwoSkills";
import TempTwoExperience from "../tTwoComp/TempTwoExperience";
import { mainProfile, scholarProfile } from "../utils/api.js";
import { useContext, useEffect, useState } from "react";
import ConvertToHtml from "../utils/ConvertToHtml";
import { ResearchContext } from "../utils/ResearchContext";
import ScholarTempTwoNavbar from "../tTwoComp/scholar/ScholarTempTwoNavbar";
import ScholarTempTwoProjects from "../tTwoComp/scholar/ScholarTempTwoProjects";
import ScholarTempTwoAwards from "../tTwoComp/scholar/ScholarTempTwoAwards";
import ScholarTempTwoPatents from "../tTwoComp/scholar/ScholarTempTwoPatents";
import ScholarTempTwoSubjects from "../tTwoComp/scholar/ScholarTempTwoSubjects";
import ScholarTempTwoResearches from "../tTwoComp/scholar/ScholarTempTwoResearches";
export const TempTwoWrapper = ({ templateData }) => {
  const { researches } = templateData;
  console.log(templateData);

  if (!researches) {
    return (
      <div className="bg-[#000000] text-white">
        <TempTwoNavbar templateData={templateData} />
        <TempTwoAbout templateData={templateData} />
        <TempTwoEducation templateData={templateData} />
        <TempTwoExperience templateData={templateData} />
        <TempTwoSkills templateData={templateData} />
        <TempTwoProjects templateData={templateData} />
        <TempTwoFooter templateData={templateData} />
      </div>
    );
  }
  return (
    <div className="bg-[#000000] text-white">
      <ScholarTempTwoNavbar templateData={templateData} />
      <TempTwoAbout templateData={templateData} />
      <TempTwoEducation templateData={templateData} />
      <TempTwoExperience templateData={templateData} />
      <ScholarTempTwoPatents templateData={templateData} />
      <ScholarTempTwoResearches templateData={templateData} />
      <ScholarTempTwoSubjects templateData={templateData} />
      <ScholarTempTwoProjects templateData={templateData} />
      <ScholarTempTwoAwards templateData={templateData} />
      <TempTwoFooter templateData={templateData} />
    </div>
  );
};

export const Temp2 = () => {
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
