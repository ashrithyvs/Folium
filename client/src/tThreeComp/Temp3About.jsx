import { RiArrowDownCircleFill } from "react-icons/ri";
export default function Temp3About({ templateData }) {
  return (
    <div className="text-white bg-white">
      <div
        id="#intro"
        className="min-h-[90vh] bg-cover  flex flex-col justify-center items-center bg-[#fdd200] text-black"
      >
        <div className="min-h-[20vh] bg-transparent w-1/3 m-auto p-8 flex flex-col text-center justify-center rounded-xl">
          {/* <span className="text-4xl font-semibold">{templateData.navText}</span>{" "} */}
          <span
            style={{
              fontFamily: "Ubuntu,Helvetica Neue,Helvetica,Arial,sans-serif",
            }}
            className="text-6xl tracking-wider uppercase bg-transparent font-semibold text-black"
          >
            {templateData.introTitle}
          </span>
          <span className="mt-2 text-2xl bg-transparent text-black">
            {templateData.introText}
          </span>
          {/* <hr className="bg-black py-[0.5px] rounded-full" /> */}
          <a
            href="#about"
            className="bg-[#fdd200] mx-auto mt-16 border-2 border-black py-3 px-4 rounded-full flex items-center space-x-3"
          >
            <RiArrowDownCircleFill
              className="text-black bg-[#fdd200]"
              size={25}
            />
            <span className="bg-transparent font-semibold tracking-widest text-black">
              SEE MORE
            </span>
          </a>
        </div>
      </div>
      <div
        id="about"
        className="w-2/3 mx-auto my-36 flex  items-center rounded-2xl justify-between p-6"
        style={{ backgroundColor: templateData.aboutBgColor }}
      >
        <img
          alt={`${templateData.user.firstName} ${templateData.user.lastName}`}
          className="rounded-full min-w-[10vw] max-h-[20vh]"
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
