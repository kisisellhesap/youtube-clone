import MainBtns from "../Arrays/Aside/MainBtns";
import MeBtns from "../Arrays/Aside/MeBtns";
import DiscoverBtns from "../Arrays/Aside/DiscoverBtns";
import SettingsBtns from "../Arrays/Aside/SettingsBtns";
import SubscribeBtns from "../Arrays/Aside/SubscribeBtns";
import AsideFooterBtns from "../Arrays/Aside/AsideFooterBtns";
import YoutubeBtns from "../Arrays/Aside/YoutubeBtns";
import { MdNavigateNext } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useGeneralContext } from "../../context/GeneralContext";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../../../public/Youtube_logo.png";
const AsideL = () => {
  const { leftState, setLeftState } = useGeneralContext();
  const { selectedCat, setSelectedCat } = useGeneralContext();

  const asideEffect = (e) => {
    setLeftState(!leftState);
    const aside =
      e.target.parentElement.parentElement.nextElementSibling.children[0];
  };

  return (
    <aside className={leftState ? "aside" : "aside fixed"}>
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
      <div className="aside-wrapper">
        <div
          className={
            !leftState
              ? "aside-section mainbtns"
              : "aside-section mainbtns main-effect"
          }
        >
          {MainBtns.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={!leftState ? "" : "a-effect"}
              onClick={() => {
                setSelectedCat("Tümü");
              }}
            >
              {item.icon}
              {item.span}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/"
          className={!leftState ? "me-link" : "me-link me-effect"}
        >
          <button className="me-user">
            <FaRegUserCircle />
          </button>
          <span>Siz</span>
          <button>
            <MdNavigateNext />
          </button>
        </NavLink>

        {!leftState && (
          <>
            {" "}
            <div className="aside-section mebtns">
              <div className="aside-child-btns">
                {MeBtns.map((item, index) => (
                  <NavLink to={item.path} key={index}>
                    {item.icon}
                    {item.span}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="aside-section subscribebtns">
              <h3>Abonelikler</h3>
              <div className="aside-child-btns">
                {SubscribeBtns.map((item, index) => (
                  <NavLink to={item.path} key={index}>
                    {item.img}
                    {item.span}
                    {item.icon}
                  </NavLink>
                ))}
              </div>
              <button>
                <h6>
                  <FaChevronDown />
                </h6>
                <p>Daha fazla göster</p>
              </button>
            </div>
            <div className="aside-section discoverybtns">
              <h3>Keşfet</h3>
              <div className="aside-child-btns">
                {DiscoverBtns.map((item, index) => (
                  <NavLink to={item.path} key={index}>
                    {item.icon}
                    {item.span}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="aside-section youtubebtns">
              <h3>YouTube'dan daha fazlası</h3>
              <div className="aside-child-btns">
                {YoutubeBtns.map((item, index) => (
                  <NavLink to={item.path} key={index}>
                    {item.icon}
                    {item.span}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="aside-section settingsbtns">
              {SettingsBtns.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  {item.icon}
                  {item.span}
                </NavLink>
              ))}
            </div>
            <div className="asidefooterbtns">
              <nav>
                {AsideFooterBtns.navOne.map((item, index) => {
                  return (
                    <Link to={item.path} key={index}>
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
              <nav>
                {AsideFooterBtns.navTwo.map((item, index) => {
                  return (
                    <Link to={item.path} key={index}>
                      {item.title}
                    </Link>
                  );
                })}
              </nav>

              <p> © 2024 Google LLC</p>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default AsideL;

// ASİDE  YOUTUBE BTNS
// ASİDE HAMBURGER BTNS EFFECT
// İNPUT SEARCH
// FİLTER CONTROLS
// RİGHTSİDEBAR EFFECT
