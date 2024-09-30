import { useEffect, useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";
import profile_img from "../assets/profile.avif";
import Sidebar from "../components/Sidebar";

const User = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(false);
  const username = localStorage.getItem("username");
  useEffect(() => {
    const bio = document.getElementsByClassName(".bio");
    const handleUser = async () => {
      const res = await axios.get(
        `http://localhost:3000/user/info/${username}`
      );
      const user = res.data.user;
      if (user) {
        setUser(user);
      }
    };
    
    handleUser();
    if (bio.length === 0) {
      setProfile(false);
    }
  }, [setUser, setProfile, username]);
  console.log(profile);
  return (
    <div className="flex">
      <Sidebar />
      {/* profile starts */}
      <div>
        <div className="md:px-80 w-full mt-14">
          <div className="flex">
            <FontAwesomeIcon icon={faUser} className="text-4xl" />
            <p className="font-bold ml-4 text-xl">{user.username}</p>
          </div>
          <div className="flex ml-10 mt-5">
            <h2> posts</h2>
            <h2 className="ml-10"> followers</h2>
            <h2 className="ml-10"> following</h2>
          </div>
          <h2 className="font-bold ml-10 mt-5">{user.name}</h2>
          <h2 className="font-semibold ml-10 mt-5 bio"></h2>
        </div>
        <div className="border-t-[1px] py-10 min-h-screen ml-24 border-gray-500 mt-10 flex flex-wrap">
          {/* posts by user starts */}

          {/* posts by user ends */}
          {!profile ? (
            <div className="border-[2px] border-slate-600 w-full md:h-60 rounded-lg">
              <img
                src={profile_img}
                alt="profile img"
                className="rounded-[100%] size-24 mx-auto mt-5"
              />
              <h2 className="text-center text-5xl font-bold">
                Setup your Profile
              </h2>
              <button className="bg-blue-600 hover:bg-blue-800 font-semibold px-4 py-1 ml-[29vw] m-5 rounded-md">
                <Link to={`/setup-profile/${username}`}> Get start </Link>
              </button>
            </div>
          ) : (
            <div className="w-1/3 h-72 relative overflow-hidden">
              <img
                src=""
                alt="sample"
                className="w-full m-2 h-full object-cover absolute cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      {/* profile ends */}
    </div>
  );
};

export default User;
