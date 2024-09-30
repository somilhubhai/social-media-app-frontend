import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        "http://localhost:3000/user/signup",
        formData
      );
      const data = res.data;
      console.log(data);
      const userNameError = res.data.error.keyValue.username;
      const userEmailError = res.data.error.keyValue.email;
      // if username is taken
      if (userNameError) {
        alert("username" + "  " + userNameError + "  " + "is already taken");
      }
      // if email error occurs
      if (userEmailError) {
        alert("Email should be unique.. Try Again");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const isFormValid =
    formData.username.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.name.trim() !== "";
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="text-black p-4 md:mx-[35vw] md:my-[10vh] bg-slate-200 font-semibold rounded"
      >
        <h2 className="text-2xl text-center">Signup</h2>
        <input
          className="border-[1px] border-stone-600 w-full mt-2 rounded px-2 py-1"
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <input
          className="border-[1px] border-stone-600 mt-2 w-full rounded px-2 py-1"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter you email address"
        />
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
          className={`w-full bg-gradient-to-tr from-gray-700 to-slate-300 px-2 py-1 rounded mt-4 hover:bg-gradient-to-tr hover:from-slate-300 hover:to-gray-700 transition-all hover:text-white ${
            !isFormValid ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
      <div className="mx-[35vw] bg-slate-200 text-black font-semibold rounded p-4">
        <p>
          Already have an Account?
          <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
