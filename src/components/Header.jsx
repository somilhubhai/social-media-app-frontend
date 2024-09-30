import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hamburger from "../assets/hamburger.webp";
import cross from "../assets/cross.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);
  const [checkUser, setCheckUser] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const checkUser = () => {
      if (localStorage.token !== "undefined") {
        setCheckUser(true);
      }
      console.log(localStorage);
    };
    checkUser();
    return () => window.removeEventListener("resize", handleResize);
  }, [setCheckUser]);
  console.log(checkUser);

  const logoutUser = async () => {
    const res = await axios.get("http://localhost:3000/user/logout");
    const data = res.data;
    console.log(data);
    localStorage.setItem("token", undefined);
    localStorage.setItem("username", "");
    console.log(localStorage);
    return (window.location.href = "/");
  };
  const username = localStorage.getItem("username");
  return (
    <div>
      <nav className="flex px-8 py-5 justify-between text-gray-400 font-bold border-b-2 border-b-gray-400">
        <h2 className="text-xl hover:text-white transition-all delay-100">
          <Link to="/">Somil Gupta</Link>
        </h2>
        {isMobile ? (
          <>
            <img
              src={hamburger}
              alt="hamburger"
              className="size-10"
              onClick={() => setShowMenu(true)}
            />
            {showMenu && (
              <div className="absolute h-[40vh] w-[50vw] navbar right-0 top-0 px-4 py-3 backdrop-blur-xl">
                <img
                  src={cross}
                  alt="cross"
                  className="size-10 ml-auto rounded-full"
                  onClick={() => setShowMenu(false)}
                />
                <div>
                  <h4 className="hover:text-white transition-all delay-100">
                    <Link to="">Feed</Link>
                  </h4>
                  <h4 className="hover:text-white mt-5 transition-all delay-100">
                    <Link to="/search">Search</Link>
                  </h4>
                  <h4 className="hover:text-white mt-5 transition-all delay-100">
                    <Link to="/chat">Chat</Link>
                  </h4>
                  {checkUser ? (
                    <>
                      <button
                        onClick={logoutUser}
                        className="border-2 px-4 py-2 mt-5 rounded text-white hover:text-black hover:bg-white transition-all"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <br />
                      <button className="border-2 px-4 py-2 mt-5 rounded hover:text-black hover:bg-white transition-all">
                        <Link to="/login"> Login</Link>
                      </button>
                    </>
                  )}
                  <br />
                  {checkUser ? (
                    <></>
                  ) : (
                    <button className="border-2 px-4 py-2 mt-5 rounded hover:text-black hover:bg-white transition-all">
                      <Link to="/signup">Signup</Link>
                    </button>
                  )}

                  <Link to={`/user/${username}`}></Link>
                  <FontAwesomeIcon icon={faUser} className="size-6" />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex gap-14">
            <h4 className="hover:text-white transition-all delay-100">
              <Link to="">Feed</Link>
            </h4>
            <h4 className="hover:text-white transition-all delay-100">
              <Link to="/search">Search</Link>
            </h4>
            <h4 className="hover:text-white transition-all delay-100">
              <Link to="/chat">Chat</Link>
            </h4>
            {checkUser ? (
              <button
                onClick={logoutUser}
                className="border-2 px-4 py-2 rounded hover:text-black text-white hover:bg-white transition-all"
              >
                Logout
              </button>
            ) : (
              <button className="border-2 px-4 py-2 rounded hover:text-black hover:bg-white transition-all">
                <Link to="/login"> Login</Link>
              </button>
            )}
            {checkUser ? (
              <></>
            ) : (
              <button className="border-2 px-4 py-2 rounded hover:text-black hover:bg-white transition-all">
                <Link to="/signup"> Signup</Link>
              </button>
            )}
            <Link to={`/user/${username}`}>
              <FontAwesomeIcon icon={faUser} className="size-6" />
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
