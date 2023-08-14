import React from "react";
import "./EditProfile.css";
import { useState } from "react";
import { useData } from "../../Context/DataContext";
import { editUserHandler } from "../../Services/DataServices";
import { toast } from "react-toastify";
import { AiFillCamera } from "react-icons/ai";

import { RxCross2 } from "react-icons/rx";

export const EditProfile = ({ setEditBtn, editBtn }) => {
  const {
    dataState: { users },
    darkMode,
    dataDispatch,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const socialToken = localStorage.getItem("socialToken");
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const [updatedProfile, setUpdatedProfile] = useState({
    profilePic: loggedInUser.profilePic,
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
    link: loggedInUser.link,
    bio: loggedInUser.bio,
  });

  const handleClose = () => {
    setEditBtn(!editBtn);
  };

  const avatars = [
    "https://i.ibb.co/RNn86rM/pic-1.jpg",
    "https://i.ibb.co/9bcJ2k9/pic-3.jpg",
    "https://i.ibb.co/DMRD10P/pic-2.jpg",
    "https://i.ibb.co/ByYsWQ1/pic-6.jpg",
    "https://i.ibb.co/J5yrW9W/pic5.webp",
    "https://i.ibb.co/3rCM9bj/pic-4.jpg",
    "https://i.ibb.co/QvkJT63/naruto-shippuuden-uchiha-itachi-sharingan-anime-wallpaper-preview.jpg",
    "https://i.ibb.co/sWCGdvx/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg"
  ];

  const handleImageUpload = (e) => {
    // console.log(e.target.value, "image")
    const selectedImg = e.target.files[0];
    setUpdatedProfile((prev) => ({
      ...prev,
      profilePic: URL.createObjectURL(selectedImg),
    }));
  };

  const handleAvatar = (data) => {
    setUpdatedProfile((prev) => ({ ...prev, profilePic: data }));
  };

  const handleUpdate = () => {
    editUserHandler(updatedProfile, socialToken, dataDispatch);
    setEditBtn(!editBtn);
    toast.success("Post Updated!");
  };

  const updateDetails = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
    // console.log(updatedProfile);
  };

  const { firstName, lastName, link, bio } = updatedProfile;
  return (
    <div className={`editMainContainer ${darkMode && "bgDarkmode"}`}>
      <div className={`editInnerConatainer  ${darkMode && "bgDarkmode"}`}>
        <div className={`updateConatiner  ${darkMode && "bgDarkmode"}`}>
          <RxCross2
            onClick={handleClose}
            className={`cross-icon  ${darkMode && "bgDarkmode"} pointer`}
          />
          <div>
            <p className={`avatarinfo  ${darkMode && "bgSecondaryDarkMode"}`}>
              Select Your Avatar
            </p>
          </div>

          <div className={`updateAvatarMain  ${darkMode && "bgDarkmode"}`}>
            <div className={`updateAvatar  ${darkMode && "bgDarkmode"}`}>
              {avatars.map((data, i) => (
                <div
                  onClick={() => handleAvatar(data)}
                  className={`imgAvatar ${updatedProfile.profilePic === data && "imgAvatarSelected"
                    }  ${darkMode && "bgDarkmode"}`}
                  key={i}
                >
                  <img
                    src={data}
                    alt="img"
                    height={70}
                    width={70}
                    name="profilePic"
                    value={data}
                    onClick={updateDetails}
                  />
                </div>
              ))}
            </div>
            <div
              className={`input-file-container flex align-center  ${darkMode && "bgDarkmode"
                }`}
            >
              <span className={`profile-text  ${darkMode && "bgDarkmode"}`}>
                Profile
              </span>

              <label
                for="file-upload"
                className={`btn-upload  ${darkMode && "bgDarkmode"}`}
              >
                <img
                  src={updatedProfile.profilePic}
                  alt=""
                  width="200"
                  className={`edit-profile-icon  ${darkMode && "bgDarkmode"}`}
                />
                <span className={`edit-profile-camera-icon  `}>
                  <AiFillCamera />
                </span>
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className={`infoEditContainer  ${darkMode && "bgDarkmode"}`}>
            <label className="labelUpdateProfile">
              First Name:
              <input
                type="text"
                name="firstName"
                onChange={updateDetails}
                value={firstName}
                className="inputp"
              />
            </label>
            <label className="labelUpdateProfile">
              last Name:
              <input
                type="text"
                name="lastName"
                onChange={updateDetails}
                value={lastName}
                className="inputp"
              />
            </label>
            <label className="labelUpdateProfile">
              Link :
              <input
                type="text"
                name="link"
                onChange={updateDetails}
                value={link}
                className="inputp"
              />
            </label>
            <div className="labelUpdateProfile">
              <label className="labelUpdateProfile">Bio :</label>
              <textarea
                placeholder="bio"
                className="editPost-input"
                onChange={updateDetails}
                name="bio"
                value={bio}
              />
            </div>
          </div>
          <div className="btn-edit-profile-div">
            <button className="updateBtn" onClick={handleUpdate}>
              Update
            </button>
            <button onClick={handleClose} className="updateBtn">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
