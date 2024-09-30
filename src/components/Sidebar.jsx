import { faMessage, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Sidebar = () => {
  return (
    <>
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
    </>
  );
}

export default Sidebar