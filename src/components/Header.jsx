import React, { useEffect, useState, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import RightSideBar from "./RightSideBar";
import { useGeneralContext } from "../context/GeneralContext";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../public/Youtube_logo.png";

const Header = () => {
  const { leftState, setLeftState } = useGeneralContext();
  const [rightState, setRightState] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const profileDivRef = useRef(null);
  const rightSideBarRef = useRef(null);
  const { selectedCat, setSelectedCat } = useGeneralContext();

  const [text, setText] = useState("");
  const navigate = useNavigate();

  const asideEffect = (e) => {
    setLeftState(!leftState);
    const aside =
      e.target.parentElement.parentElement.nextElementSibling.children[0];
  };

  const profileBarEffect = (e) => {
    setRightState(!rightState);
    const profileBar = e.target.parentElement.nextElementSibling;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDivRef.current &&
        !profileDivRef.current.contains(event.target) &&
        rightSideBarRef.current &&
        !rightSideBarRef.current.contains(event.target)
      ) {
        setRightState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const submit = () => {
    setInputActive(true);
    // setRightState(false);

    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="header">
      <div className="header-l">
        <button className="hamburger-icon" onClick={(e) => asideEffect(e)}>
          <RxHamburgerMenu />
        </button>
        <Link
          to="/"
          onClick={() => {
            setSelectedCat("Tümü");
          }}
        >
          <div className="header-logo">
            <img src={logo} alt="Youtube logo" />
            <h1>YouTube</h1>
            <span>TR</span>
          </div>
        </Link>
      </div>
      <div className={inputActive ? "header-c header-c-res" : "header-c"}>
        <button
          className="close-input"
          onClick={() => {
            setInputActive(false);
          }}
        >
          <FaArrowLeftLong />
        </button>

        <div className="search-container">
          <div className="search-input-div">
            <button className="input-left-search">
              <CiSearch />
            </button>

            <input
              type="text"
              placeholder="Ara"
              onChange={(e) => {
                setText(e.target.value.trim());
              }}
              defaultValue={text}
            />
          </div>
          <button onClick={submit}>
            <CiSearch />
            <span>Ara</span>
          </button>
        </div>
        <button>
          <MdKeyboardVoice />
          <span>Sesle arama yapın</span>
        </button>
      </div>
      <div className="header-r">
        <button>
          <RiVideoAddLine />
          <span>Oluştur</span>
        </button>
        <button>
          <IoMdNotificationsOutline />
          <span>Bildirimler</span>
        </button>
        <div
          className="profile-div"
          ref={profileDivRef}
          onClick={(e) => profileBarEffect(e)}
        >
          <FaRegUserCircle />
        </div>
      </div>

      {rightState && <RightSideBar rightSideBarRef={rightSideBarRef} />}
    </header>
  );
};

export default Header;
