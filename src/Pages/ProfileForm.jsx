import axios from "axios";
import { useState } from "react";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    bio: "",
    linkedin : "",
    github: "",
    instagram: "",
    profilePicture: null,
    profilePicturePreview: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profilePicture: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profilePicturePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/profile/add-profile",
        formData
      );
      const data = res.data;
      console.log(data);
      const resPic = await axios.post(
        "http://localhost:3000/profile/uploads",
        formData.profilePicture
      );
      console.log("Img upload done");
      const dataPic = resPic.data;
      console.log(dataPic);
    } catch (error) {
      console.log(error.message);
    }
    const username = localStorage.getItem("username")
    console.log(username)
    window.location.replace(`http://localhost:5173/user/${username}`);
  };
  return (
    <form
      className="px-40 py-10"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input
        type="text"
        className="bg-transparent border-b-[2px] w-full p-2 focus:outline-none"
        placeholder="Add your personal bio. Which tells you more about"
        name="bio"
        value={formData.bio}
        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Add your github link (If any)"
        name="github"
        className="bg-transparent border-b-[2px] mt-8 w-full p-2 focus:outline-none"
        value={formData.github}
        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Add your linkedIn profile (If any)"
        name="linkedin"
        className="bg-transparent border-b-[2px] mt-8 w-full p-2 focus:outline-none"
        value={formData.linkedin}
        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Add your instagram link (if you want)"
        name="instagram"
        className="bg-transparent border-b-[2px] mt-8 w-full p-2 focus:outline-none"
        value={formData.instagram}
        onChange={(e) =>
          setFormData({ ...formData, instagram: e.target.value })
        }
      />
      <br />
      {/* File Input for Profile Picture */}
      <p className="mt-8"> Profile Picture : </p>
      <br />
      <input
        type="file"
        accept="image/*"
        name="profilePicture"
        onChange={handleFileChange}
      />
      {formData.profilePicturePreview && (
        <img
          src={formData.profilePicturePreview}
          alt="Profile Preview"
          width="150"
          height="150"
        />
      )}
      <br />
      <button
        type="submit"
        className="mt-5 bg-green-500 hover:bg-green-600 px-4 py-1 rounded"
      >
        Save changes
      </button>
    </form>
  );
};

export default ProfileForm;
