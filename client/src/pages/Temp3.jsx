import Temp3Navbar from "../tThreeComp/Temp3Navbar";
import Temp3About from "../tThreeComp/Temp3About";
import Temp3Projects from "../tThreeComp/Temp3Projects.jsx";
import Temp3Footer from "../tThreeComp/Temp3Footer";
import { mainProfile } from "../utils/api.js";
import { useEffect, useState } from "react";
import ConvertToHtml from "../utils/ConvertToHtml";
export const Temp3Wrapper = ({ templateData }) => {
  console.log(templateData);
  return (
    <div className="bg-[#111827] text-white">
      <Temp3Navbar templateData={templateData} />
      <Temp3About templateData={templateData} />
      <Temp3Projects templateData={templateData} />
      <Temp3Footer templateData={templateData} />
    </div>
  );
};

export const Temp3 = () => {
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
          <Temp3Wrapper templateData={templateData} />
          <button
            className="custom-btn-outline inline px-4 mx-auto my-6"
            onClick={() => {
              ConvertToHtml(templateData, Temp3Wrapper);
            }}
          >
            Generate HTML
          </button>
        </div>
      )}
    </div>
  );
};
