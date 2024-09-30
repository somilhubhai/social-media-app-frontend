import Footer from "./components/Footer";
import Header from "./components/Header";

import Signup from "./components/Signup";
import { Outlet } from "react-router-dom";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react"

// import User from "./Pages/User";

import { useEffect, useState } from "react";
import Login from "./components/Login";


const App = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (localStorage.token !== "undefined") {
      setUser(true);
    }
    console.log(localStorage);
  }, [setUser]);
  console.log(user);
  return (
    <div className="overflow-x-hidden bg-clip-border bg-gradient-to-bl from-black to-slate-800 text-white min-h-screen">
      {user ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          <h2 className="h2 text-center">Signup first Then Login</h2>
          <Signup />
          <Login />
        </>
      )}
      
    </div>
  );
};

export default App;
