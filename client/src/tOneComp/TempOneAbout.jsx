export default function About({ templateData }) {
  console.log(templateData);
  return (
    <div className="mb-5 text-white">
      <div
        className="min-h-[80vh] bg-cover flex items-center"
        style={{
          backgroundImage: `url(${templateData.navImage})`,
        }}
      >
        <div className="bg-[#111827] min-h-[20vh] w-2/3 m-auto  p-8 flex flex-col text-center justify-center rounded-xl">
          <span className="text-4xl font-semibold">
            {templateData.introTitle}
          </span>
          <span className="mt-2">{templateData.introText}</span>
        </div>
      </div>
      <div
        className="w-2/3 mx-auto my-36 flex items-center rounded-2xl justify-between p-6"
        style={{ backgroundColor: templateData.navColor }}
      >
        <img
          alt={`${templateData.user.firstName} ${templateData.user.lastName}`}
          className="rounded-full min-w-[10vw]"
          src={templateData.profileImage}
        />{" "}
        <div className="flex flex-col w-4/5 bg-transparent">
          <h1 className="bg-transparent">
            {templateData.user.firstName} {templateData.user.lastName}
          </h1>
          <h6 className="bg-transparent">{templateData.bio}</h6>
        </div>
      </div>
    </div>
  );
}