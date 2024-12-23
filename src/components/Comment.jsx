import React, { useEffect, useState } from "react";
import api from "../api";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Comment = ({ id }) => {
  const [comments, setComments] = useState({});
  useEffect(() => {
    api
      .get("/comments", { params: { id } })
      .then((res) => {
        // console.log(res.data.commentsCount);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="comment">
      <div className="comment-header">
        <h3 className="comment-count">{comments.commentsCount}</h3>
        <button className="order-btn">
          <BiMenuAltLeft />
          Sıralama Ölçütü:
        </button>
      </div>
      <div className="your-comment">
        <img src={"../../public/subscribes/user.png"} alt="" />
        <input type="text" placeholder="Yorum ekleyin..." />
      </div>

      <div className="people-comment">
        {comments.data?.map((item, index) => {
          return (
            <div className="comment-card" key={index}>
              <img src={item?.authorThumbnail[0]?.url} alt="" />
              <div className="comment-info">
                <div className="comment-info-header">
                  <h4 className="comment-user">{item.authorText}</h4>
                  <p className="comment-time">{item.publishedTimeText}</p>
                </div>
                <p className="comment-text">{item.textDisplay}</p>
                <div className="comment-controller">
                  <button className="comment-like">
                    <BiLike />
                    {item.likesCount}
                  </button>
                  <button className="comment-unlike">
                    <BiDislike />
                  </button>
                  <button>Yanıtla</button>
                </div>
                {item.replyCount != 0 && (
                  <button>
                    <MdKeyboardArrowDown />
                    {item.replyCount} Yanıt
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
