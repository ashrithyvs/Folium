import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import ScholarForm from "../components/ScholarForm";
function Author({ currentAuthor, setCurrentAuthor }) {
  function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    // document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    // document.getElementById(modalID).classList.toggle("flex");
    // document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }

  return (
    <main>
      <div className="flex justify-start items-center">
        <IoChevronBackSharp
          size={40}
          className="cursor-pointer rounded-full p-2 border-white border-2"
          onClick={() => setCurrentAuthor()}
        />
      </div>
      <ScholarForm />
      <div className="flex space-x-6 p-4">
        <img
          alt=""
          className="w-1/4 rounded-3xl min-h-full"
          src={currentAuthor.author.thumbnail || "holder.js/100px180"}
        />
        <div className=" flex flex-col space-y-2 py-3 justify-center items-start">
          <h4 className=" text-xl font-bold">
            Hey! I'm {currentAuthor.author.name}
          </h4>{" "}
          <div>
            <h4 className=" text-xl font-bold">
              Affiliation:{" "}
              <span className="font-normal">
                {currentAuthor.author.affiliations}
              </span>
            </h4>{" "}
            <h4 className=" text-xl font-bold">
              Interests:{" "}
              {currentAuthor.author.interests.map((interest, i) => {
                return (
                  <span className="font-normal">
                    {interest.title}
                    {i === currentAuthor.author.interests.length - 1
                      ? null
                      : ","}{" "}
                  </span>
                );
              })}
            </h4>
            <h4 className=" text-xl font-bold">
              Website:{" "}
              <a
                href={currentAuthor.author.website}
                target="_blank"
                className="font-normal text-white"
                rel="noreferrer"
              >
                {currentAuthor.author.website}
              </a>
            </h4>{" "}
            <h4 className=" text-xl font-bold">
              Mail:{" "}
              <a
                href={`mailto:${currentAuthor.author.email}`}
                className="font-normal text-white"
              >
                {currentAuthor.author.email}
              </a>
            </h4>
          </div>
          <button
            onClick={() => toggleModal("scholarDetailsModal")}
            className="custom-btn-outline px-2"
          >
            Create Portfolio
          </button>
        </div>
      </div>
      {currentAuthor.articles.map((article, idx) => {
        return (
          <div
            key={idx}
            className="w-full bg-[#1b2232] m-2 rounded-2xl flex flex-col justify-center text-left p-4"
          >
            <div className="flex justify-between w-full mb-2  items-center">
              <a
                href={article.link}
                target="_blank"
                className="bg-transparent text-white font-bold text-xl max-w-[95%]"
                rel="noreferrer"
              >
                {article.title}
              </a>
              <div className="flex flex-wrap ">
                <h4 className="bg-transparent mx-2 text-base">
                  {article.year}
                </h4>
                {article.cited_by.value && (
                  <h4 className="bg-transparent mx-2 text-base">
                    Cited by : {article.cited_by.value}
                  </h4>
                )}
              </div>
            </div>
            <p className="bg-transparent mb-0">{article.authors}</p>
            <p className="bg-transparent">{article.publication}</p>
          </div>
        );
      })}
    </main>
  );
}

export default Author;
