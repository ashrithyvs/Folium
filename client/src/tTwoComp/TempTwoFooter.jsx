import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFilePdf,
  AiFillMail,
} from "react-icons/ai";

export default function TempOneFooter({ templateData }) {
  return (
    <div
      id="footer"
      className="flex w-2/3 mx-auto mt-12 py-4 items-center justify-center space-x-4"
    >
      <h4 className="text-base m-0 italic font-semibold">
        {templateData.footer}
      </h4>
      <a href={`mailto:${templateData.user.email}`}>
        <AiFillMail size={24} />
      </a>
      <a href={templateData.resumeUrl} target="_blank" rel="noreferrer">
        <AiFillFilePdf size={24} />
      </a>
      <a href={templateData.githubLink} target="_blank" rel="noreferrer">
        <AiFillGithub size={24} />
      </a>
      <a href={templateData.linkdin} target="_blank" rel="noreferrer">
        <AiFillLinkedin size={24} />
      </a>
    </div>
  );
}
