export default function TempOneFooter({ templateData }) {
  return (
    <div className="flex w-2/3 mx-auto mt-12 py-4 items-center justify-center space-x-4">
      <a className="text-white" href={`mailto:${templateData.email}`}>
        {templateData.email}
      </a>
      <a className="text-white" href={templateData.resumeUrl}>
        Resume
      </a>
      <a className="text-white" href={templateData.githubLink}>
        Github
      </a>
      <a className="text-white" href={templateData.linkdin}>
        LinkedIn
      </a>
    </div>
  );
}