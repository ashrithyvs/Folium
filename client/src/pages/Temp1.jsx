import "./Temp1.css";
import Navbar from "../tOneComp/TempOneNavbar";
import About from "../tOneComp/TempOneAbout";
import Projects from "../tOneComp/TempOneProjects.jsx";
import Footer from "../tOneComp/TempOneFooter";
import { mainProfile } from "../utils/api.js";
import { useEffect, useState } from "react";
import ConvertToHtml from "../utils/ConvertToHtml";
export const TempOneWrapper = ({ templateData }) => {
  console.log(templateData);
  return (
    <div class="bg-[#111827] text-white">
      <Navbar />
      <About templateData={templateData} />
      <Projects templateData={templateData} />
      <Footer templateData={templateData} />
    </div>
  );
};

export const Temp1 = () => {
  const [templateData, setTemplateData] = useState([]);

  useEffect(() => {
    mainProfile()
      .then((res) => {
        setTemplateData(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {templateData.length !== 0 && (
        <>
          <TempOneWrapper templateData={templateData} />
          <button
            onClick={() => {
              ConvertToHtml(templateData, TempOneWrapper);
            }}
          >
            Convert
          </button>
        </>
      )}
    </div>
  );
};
