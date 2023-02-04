import Navbar from "../tTwoComp/Navbar";
import About from "../tTwoComp/About";
import Footer from "../tOneComp/TempOneFooter";
import Project from "../tTwoComp/Project";
import ProjectCard from "../tTwoComp/ProjectCard";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Temp2() {
  let history = useHistory();

  function handleClick() {
    return history.push("/templates");
  }

  return (
    <div>
      <div id="tempBorder">
        <Navbar />
        <About />
        <Project />
        <ProjectCard />
        <Footer />
      </div>
      <div id="tempBtn2">
        <Button className="btn btn-info btn-lg" onClick={handleClick}>
          Templates
        </Button>
      </div>
    </div>
  );
}
