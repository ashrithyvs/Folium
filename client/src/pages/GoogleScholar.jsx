import { useState } from "react";
import { getAuthors, getAuthor } from "../utils/api";
import { IoChevronBackSharp } from "react-icons/io5";
import Author from "./Author";
import Spinner from "../components/Spinner";
function GoogleScholar() {
  const [searchAuthor, setSearchAuthor] = useState("");
  const [authorsList, setAuthorsList] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState();
  const [loading, setLoading] = useState(false);
  //   const [showList,setShowlist]
  const getAuthorsList = () => {
    setLoading(true);
    getAuthors(searchAuthor).then((res) => {
      console.log(res);
      setAuthorsList(res.profiles);
      setLoading(false);
    });
  };

  const fetchAuthorProfile = (id) => {
    setLoading(true);
    getAuthor(id).then((res) => {
      console.log(res);
      setCurrentAuthor(res);
      setLoading(false);
    });
  };

  return (
    <div className="w-1/2 mx-auto min-h-[90vh] mt-6 flex flex-col items-center justify-center">
      {!currentAuthor && !loading && (
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
      {loading && <Spinner />}
      <div className="flex flex-wrap items-start justify-center mt-6">
        {authorsList.length !== 0 &&
          !loading &&
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

      {currentAuthor && !loading && (
        <Author
          currentAuthor={currentAuthor}
          setCurrentAuthor={setCurrentAuthor}
        />
      )}
    </div>
  );
}

export default GoogleScholar;
