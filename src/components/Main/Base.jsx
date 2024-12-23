import React, { useRef, useState, useEffect } from "react";
import banner from "/entertaiment/monster.png";

import Filters from "../Arrays/Filters";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import api from "../../api";
import Card from "../Card";
import { useGeneralContext } from "../../context/GeneralContext";
const Base = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);
  const [scrollLeftValue, setScrollLeftValue] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);
  const [halfScrollValue, setHalfScrollValue] = useState(0);

  const { selectedCat, setSelectedCat } = useGeneralContext();
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navRef = useRef(null);

  const scrollRightBtn = () => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: 50,
        behavior: "smooth",
      });
    }
  };

  const scrollLeftBtn = () => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: -50,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (navRef.current) {
      const currentScrollLeft = navRef.current.scrollLeft;
      const maxScroll = navRef.current.scrollWidth - navRef.current.clientWidth;

      setScrollLeftValue(currentScrollLeft);
      setMaxScrollLeft(maxScroll);
      setHalfScrollValue(maxScrollLeft / 2);
    }
  };

  const handleNavClick = (e) => {
    const itemPosition = e.target.offsetLeft;
    const currentScrollPosition = navRef.current.scrollLeft;
    const scrollToPosition = itemPosition - currentScrollPosition;
    if (navRef.current) {
      navRef.current.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleScroll();
  }, [maxScrollLeft]);

  useEffect(() => {
    const url =
      selectedCat === ""
        ? "/tümü"
        : selectedCat === "trending"
        ? "/trending"
        : `/search?query=${selectedCat}`;

    setLoading(true);

    api
      .get(url)
      .then((res) => {
        setVideos(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCat]);

  return (
    <div className="base">
      <div className="base-filter">
        <button
          className={
            scrollLeftValue === 0
              ? "filter-btn-before d-none"
              : "filter-btn-before d-block"
          }
          onClick={scrollLeftBtn}
        >
          <MdNavigateBefore />
        </button>
        <nav ref={navRef} onScroll={handleScroll} onClick={handleNavClick}>
          {Filters.map((item, index) => {
            return (
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                key={index}
                onClick={() => {
                  setSelectedCat(item.title);
                }}
                to={`/${item.path}`}
              >
                {item.title === "/" ? "Tümü" : item.title}
              </NavLink>
            );
          })}
        </nav>
        <button
          className={
            scrollLeftValue === maxScrollLeft
              ? "filter-btn-next d-none"
              : "filter-btn-next d-block"
          }
          onClick={scrollRightBtn}
        >
          <MdNavigateNext />
        </button>
      </div>
      <div className="base-adverts">
        <div className="adverts-card">
          <div className="adverts-video">
            <iframe
              width="424"
              height="239"
              src={`https://www.youtube.com/embed/d4XXpcytQp0?si=FimpqjIB1dwp5h7j&amp;controls=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="adverts-content">
            <a href="">
              <img src={banner} alt="" />
            </a>
            <div className="adverts-info">
              <img src="../../../public/channels4_profile.jpg" alt="" />
              <div className="adverts-more-info">
                <div className="more-info-header">
                  <h4>Eti Burçak Sütlü Çikolatalı</h4>
                  <HiDotsVertical className="dot-vertical" />
                </div>
                <p className="sponsor-content">
                  <span>Sponsorlu ·</span>
                  Eti
                </p>
                <button>Keşfet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="base-videos">
        {videos.map((item, index) => {
          {
            return (
              item.type === "video" && (
                <Link to={`watch?v=${item.videoId}`} key={index}>
                  <Card item={item} />
                </Link>
              )
            );
          }
        })}
      </div>
    </div>
  );
};

export default Base;
