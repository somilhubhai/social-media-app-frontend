import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import Signup from "./components/Signup.jsx";
import Chat from "./components/Chat.jsx";
import User from "./Pages/User.jsx";
import Search from "./components/Search.jsx";
import ProfileForm from "./Pages/ProfileForm.jsx";

const username = localStorage.getItem("username");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="chat" element={<Chat />} />
      <Route path={`user/${username}`} element={<User />} />
      <Route path="search" element={ <Search /> } />
      <Route path={`setup-profile/${username}`} element={ <ProfileForm /> } />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
