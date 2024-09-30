import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/user/login",
        formData
      );
      console.log(res.data);
      const userToken = res.data.token;
      if (localStorage.token === "undefined") {
        localStorage.setItem("token", userToken);
      }
      // if error occurss
      if (res.data.error) {
        alert(
          "Either username or password is wrong find out by Yourself... Do something"
        );
      }
    } catch (error) {
      console.log(error);
    }

    localStorage.setItem("username", formData.username);
    
    console.log(localStorage);
    return (window.location.href = "/");
  };
  const isFormValid =
    formData.username.trim() !== "" && formData.password.trim() !== "";
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="text-black p-4 md:mx-[35vw] md:my-[8vh] bg-slate-200 font-semibold rounded"
      >
        <h1 className="text-center text-2xl">Login</h1>
        <br />
        <input
          type="text"
          className="border-[1px] border-stone-600 mt-2 rounded w-full px-2 py-1"
          placeholder="Enter your username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <input
          className="border-[1px] border-stone-600 mt-2 rounded w-full px-2 py-1"
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
        />
        <br />
        <button
          type="submit"
          className={` w-full bg-gradient-to-tr from-gray-700 to-slate-300 px-2 py-1 rounded mt-4 hover:bg-gradient-to-tr hover:from-slate-300 hover:to-gray-700 transition-all hover:text-white ${
            !isFormValid ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>

      <div className="mx-[35vw] bg-slate-200 text-black font-semibold rounded p-4">
        <p>
          Dont have an Account?
          <Link to="/signup">Signup</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
