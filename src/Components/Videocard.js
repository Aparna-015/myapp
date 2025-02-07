import React from "react";

const Videocard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) {
    console.warn("info is undefined or missing required properties:", info);
    return null;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-1 w-72 h-50 shadow-lg rounded-md text-left">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnails"
      />

      <ul>
        <li className="font-bold py-1 text-sm">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        <li>{statistics.viewCount.slice(0, 2)}K views</li>
      </ul>
    </div>
  );
};




export default Videocard;
