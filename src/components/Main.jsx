import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faMessage, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import sample from "../assets/sample.webp"

const Main = () => {

  return (
    <>
      <div className="flex">
        {/* sidebar started */}
        <div className="min-h-screen md:static w-[18vw] border-r-2 border-gray-700">
          <div className="flex mt-14 px-10">
            <FontAwesomeIcon icon={faMessage} />
            <p className="ml-4 text-xl">Messages</p>
          </div>
          <div className="flex mt-14 px-10">
            <FontAwesomeIcon icon={faSearch} />
            <p className="ml-4 text-xl">Search</p>
          </div>
          <div className="flex mt-14 px-10">
            <FontAwesomeIcon icon={faUser} />
            <p className="ml-4 text-xl">Profile</p>
          </div>
          <button className="mt-14 ml-16 text-gray-400 font-bold hover:text-white transition-all">
            Login
          </button>
          <br />
          <button className="mt-14 ml-16 text-gray-400 font-bold hover:text-white transition-all">
            Signup
          </button>
          <p className="mt-10 px-2 text-center">
            &copy; 2024 Somil Gupta created with ❤
          </p>
        </div>
        {/* sidebar ends */}

        {/* feed starts */}

        <div className="min-w-[45vw] mx-auto mt-3 px-24 block">
          {/* posts starts */}
          <div className="mt-14 border-t-[1px] rounded border-gray-500 w-[40vw]">
            {/* post nav */}
            <div className="flex px-5 py-2">
              <FontAwesomeIcon icon={faUser} />
              <p className="ml-2">ABC user</p>
              <button className="text-blue-600 ml-5">Follow</button>
            </div>
            {/* post nav ends */}
            <img
              src={sample}
              alt="sample"
              className="rounded size-1/2 h-fit w-fit"
            />
            {/* post interaction starts */}
            <div className="mt-2 flex">
              <button onClick={() => alert("You Liked the post")}>
                <FontAwesomeIcon icon={faHeart} className="size-5" />
              </button>
              <FontAwesomeIcon icon={faComment} className="size-5 ml-4" />
            </div>
            <p className="mt-2">Add a comment</p>
            {/* post interaction ends */}
          </div>
          {/* posts ends */}
          {/* posts starts */}
          <div className="mt-14 border-t-[1px] rounded border-gray-500 w-[40vw]">
            {/* post nav */}
            <div className="flex px-5 py-2">
              <FontAwesomeIcon icon={faUser} />
              <p className="ml-2">ABC user</p>
              <button className="text-blue-600 ml-5">Follow</button>
            </div>
            {/* post nav ends */}
            <img
              src={sample}
              alt="sample"
              className="rounded size-1/2 h-fit w-fit"
            />
            {/* post interaction starts */}
            <div className="mt-2 flex">
              <button onClick={() => alert("You Liked the post")}>
                <FontAwesomeIcon icon={faHeart} className="size-5" />
              </button>
              <FontAwesomeIcon icon={faComment} className="size-5 ml-4" />
            </div>
            <p className="mt-2">Add a comment</p>
            {/* post interaction ends */}
          </div>
          {/* posts ends */}
        </div>
        {/* feed ends */}
      </div>
    </>
  );
}

export default Main