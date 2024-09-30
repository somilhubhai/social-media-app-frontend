import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import profile from "../assets/profile.avif";
import { Link } from "react-router-dom";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const handleSearch = (e) => {
    setUsername(e.target.value);
  };

  const searchUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3000/user/info/${username}`
      );
      const userInfo = res.data.user;
      console.log(userInfo);
      // if user exist
      if (userInfo) {
        setUsers(userInfo);
      }
      // if user don't exist
      if (userInfo === undefined) {
        alert("There is no such user. Try Again!!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (users) {
      console.log(users);
    }
  }, [users]);
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <form onSubmit={searchUser}>
          <input
            type="text"
            onChange={handleSearch}
            value={username}
            name="username"
            className="bg-transparent border-b-[1px] px-2 py-1 outline-none font-semibold ml-[30vw] mt-2"
            placeholder="Search by username"
          />
          <button className="ml-5">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        {/* Searched id's starts */}
        {users.length !== 0 ? (
          <Link to={`/user/${username}`}>
            <div className="shadow-md cursor-pointer w-full flex shadow-pink-200 p-4 rounded ml-[15vw] mt-10">
              <div>
                <img
                  src={profile}
                  alt="profile-photo"
                  className="rounded-full size-10"
                />
              </div>
              <div>
                <h2 className="ml-5 font-semibold">{users.username}</h2>
                <h2 className="ml-5"> {users.name} </h2>
              </div>
            </div>
          </Link>
        ) : (
          <>
            <h2 className="text-center ml-[27vw] mt-10 text-3xl">Find users</h2>
            <img
              src={profile}
              alt="none"
              className="rounded-full size-32 ml-[33vw] mt-2"
            />
          </>
        )}
        {/* searched id's ends */}
      </div>
    </div>
  );
};

export default Search;
