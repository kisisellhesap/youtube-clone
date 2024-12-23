import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import api from "../api";
import ReactPlayer from "react-player/lazy";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { IoMdCut } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import Comment from "./Comment";
import millify from "millify";
const Detail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [detail, setDetail] = useState();
  const [descValue, setdescValue] = useState(false);
  const [otherBtnActive, setOtherBtnActive] = useState(false);

  useEffect(() => {
    const params = {
      id,
      extend: 1,
    };

    api
      .get("/video/info", { params })
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="detail">
      <div className="detail-video">
        <div className="player-wrapper">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            playing
            width={"100%"}
            height={"100%"}
            className="s"
          />
        </div>
        <h3 className="detail-title">{detail?.title}</h3>
        <div className="detail-info">
          <div className="detail-profile">
            <img src={detail?.thumbnail[0].url} />
            <div className="detail-profile-info">
              <h3>{detail?.channelTitle}</h3>
              <p>{detail?.subscriberCountText}</p>
            </div>
            <button className="sub-btn">Abone Ol</button>
          </div>

          <div className="detail-profile-controller">
            <div className="like-btn">
              <button>
                <BiLike />
                {millify(detail?.likeCount)}
              </button>
              <button>
                <BiDislike />
              </button>
            </div>
            <button className="share-btn">
              <PiShareFatLight />
              Paylaş
            </button>
            <div
              className={
                otherBtnActive ? "other-btn other-btn-active" : "other-btn"
              }
            >
              <button className="download-btn">
                <HiDownload />
                İndir
              </button>
              <button className="klip-btn">
                <IoMdCut />
                Klip
              </button>
              <button>
                <CiBookmark />
                Kaydet
              </button>
            </div>

            <button
              className="three-dot"
              onClick={() => {
                setOtherBtnActive(!otherBtnActive);
              }}
            >
              <BsThreeDots />
            </button>
          </div>
        </div>

        <div
          className={
            descValue
              ? "detail-description-info  desc-active"
              : "detail-description-info"
          }
        >
          <div className="detail-description-div">
            <p className={descValue ? "p-active" : ""}>
              {detail?.description}
              <button
                className={descValue ? "btn-active" : ""}
                onClick={() => {
                  setdescValue(!descValue);
                }}
              >
                {descValue ? "...Daha az göster" : "...Daha fazla"}
              </button>
            </p>
          </div>

          <div className="detail-description-profile">
            <img src={detail?.thumbnail[0].url} />
            <div className="detail-profile-info">
              <h3>{detail?.channelTitle}</h3>
              <p>{detail?.subscriberCountText}</p>
            </div>
          </div>
        </div>

        <Comment id={id} />
      </div>
      <div className="detail-other-video">
        {detail?.relatedVideos.data.map((item, index) => {
          return (
            <Link
              to={`?v=${item.videoId}`}
              key={index}
              onClick={() => {
                setdescValue(false);
              }}
            >
              <div className="other-video-card">
                <img src={item.thumbnail[0].url} />
                <div className="other-video-info">
                  <h3>{item.title}</h3>
                  <p>{item.channelTitle}</p>
                  <div className="other-video-stats">
                    <span>{millify(item.viewCount)} görüntülenme</span>
                    <span>{item.publishedTimeText}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
