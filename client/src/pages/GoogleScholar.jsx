import { useState } from "react";
import { getAuthors, getAuthor } from "../utils/api";
import { IoChevronBackSharp } from "react-icons/io5";
function GoogleScholar() {
  const [searchAuthor, setSearchAuthor] = useState("");
  const [authorsList, setAuthorsList] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState();
  //   const [showList,setShowlist]
  const getAuthorsList = () => {
    getAuthors(searchAuthor).then((res) => {
      console.log(res);
      setAuthorsList(res.profiles);
    });
  };

  const fetchAuthorProfile = (id) => {
    getAuthor(id).then((res) => {
      console.log(res);
      setCurrentAuthor(res);
    });
  };

  return (
    <div className="w-1/2 mx-auto min-h-[90vh] mt-6 flex flex-col items-center justify-center">
      {!currentAuthor && (
        <div className="flex space-x-3 w-full">
          <input
            className="custom-input"
            placeholder="Enter Author Name"
            value={searchAuthor}
            onChange={(e) => {
              setSearchAuthor(e.target.value);
            }}
          />
          <button className="custom-btn px-4" onClick={getAuthorsList}>
            Done
          </button>
        </div>
      )}

      <div className="flex flex-wrap items-start justify-center mt-6">
        {authorsList.length !== 0 &&
          !currentAuthor &&
          authorsList.map((author, idx) => {
            return (
              <div
                key={idx}
                className="min-w-[45%] max-w-[45%] cursor-pointer text-center bg-[#1b2232] m-2 rounded-2xl flex items-center space-x-6 p-4"
                onClick={() => fetchAuthorProfile(author.author_id)}
              >
                <img
                  alt=""
                  className="rounded-full min-w-[5vw] max-w-[5] min-h-[10vh] max-h-[10vh]"
                  src={author.thumbnail || "holder.js/100px180"}
                />
                <div className="bg-transparent text-left">
                  <h4 className="bg-transparent">{author.name}</h4>
                  <p className="bg-transparent">{author.affiliations}</p>
                </div>
              </div>
            );
          })}
      </div>

      {currentAuthor && (
        <main>
          <div className="flex justify-start items-center">
            <IoChevronBackSharp
              size={40}
              className="cursor-pointer rounded-full p-2 border-white border-2"
              onClick={() => setCurrentAuthor()}
            />
            {/* <h4 className="mx-auto text-center my-4 font-bold">
              {currentAuthor.author.name}'s Articles
            </h4> */}
          </div>
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
                  <h4 className="bg-transparent text-base">{article.year}</h4>
                </div>
                <p className="bg-transparent mb-0">{article.authors}</p>
                <p className="bg-transparent">{article.publication}</p>
              </div>
            );
          })}
        </main>
      )}
    </div>
  );
}

export default GoogleScholar;
