import ReactDOMServer from "react-dom/server";

export default function convertToHtml(templateData, Component) {
  var head =
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<meta http-equiv="X-UA-Compatible" content="IE=edge" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>Document</title>\n<script src="https://cdn.tailwindcss.com"></script>\n</head>\n<body>\n';
  var body = ReactDOMServer.renderToStaticMarkup(
    <Component templateData={templateData} />
  ).toString();
  var footer = "</body></html>";

  const link = document.createElement("a");
  const file = new Blob([head + body + footer], { type: "text/html" });
  link.href = URL.createObjectURL(file);
  link.download = `${templateData.user.firstName}${templateData.user.lastName}'s Portfolio`;
  link.click();
  URL.revokeObjectURL(link.href);
}
