import React from "react";

const ProfileCards = ({ profileInfo }) => {
  const { name, imageURL, bio } = profileInfo;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 mb-6">
      <img
        src={imageURL}
        alt={name}
        className="w-24 h-24 rounded-full border-4 border-[#286b7b]"
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCards;
