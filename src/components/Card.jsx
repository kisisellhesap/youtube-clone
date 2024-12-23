import millify from "millify";
import React, { useState } from "react";
const Card = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="card-video">
        <img src={item.thumbnail[0].url} />
      </div>
      <div className="card-body">
        <img
          src={item?.channelThumbnail && item?.channelThumbnail[0].url}
          alt=""
        />
        <div className="card-info">
          <h3>{item?.title}</h3>
          <p className="channel-name">{item?.channelTitle}</p>
          <p className="channel-time">
            <span> {millify(item?.viewCount)} Görüntülenme</span>
            <span>{item?.publishedTimeText}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
