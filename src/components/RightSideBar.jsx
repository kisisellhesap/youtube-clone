import React from "react";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaUserCircleSolid } from "react-icons/lia";
import { HiLanguage } from "react-icons/hi2";
import { MdOutlineAddModerator } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FaRegKeyboard } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiFileWarningLine } from "react-icons/ri";
import { MdOutlineModeNight } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const RightSideBar = ({ rightSideBarRef }) => {
  return (
    <div className="right-side-bar" ref={rightSideBarRef}>
      <div className="sidebar-profile">
        <FaRegUserCircle className="pp" />
        <div className="profile-info">
          <span className="name">johan basel</span>
          <span className="email">@johanbasel7906</span>

          <Link href="">Kanalızı görüntüleyin</Link>
        </div>
      </div>
      <div className="g-section">
        <button>
          <FaGoogle /> <p>Google Hesabı</p>{" "}
        </button>
        <button>
          <MdOutlineSwitchAccount />
          <p>Hesap Değiştir</p>
          <MdNavigateNext className="next-i" />
        </button>
        <button>
          <FaArrowRightToBracket />
          <p>Oturumu Kapat</p>{" "}
        </button>
      </div>
      <div className="g-section">
        <button>
          <SlSocialYoutube />
          <p>Youtube Studio</p>{" "}
        </button>
        <button>
          <RiMoneyDollarCircleLine />
          <p>Satın alınanlar ve üyelikler</p>{" "}
        </button>
      </div>
      <div className="g-section">
        <button>
          <LiaUserCircleSolid />
          <p>Youtube'daki verileriniz</p>{" "}
        </button>
        <button>
          <MdOutlineModeNight />
          <p>Görünüm: Cihaz teması</p>
          <MdNavigateNext className="next-i" />
        </button>
        <button>
          <HiLanguage /> <p>Dil: Türkçe</p>
          <MdNavigateNext className="next-i" />
        </button>
        <button>
          <MdOutlineAddModerator />
          <p>Kısıtlı Mod: Kapalı</p>
          <MdNavigateNext className="next-i" />
        </button>
        <button>
          <TfiWorld /> <p>Konum: Türkiye</p>
          <MdNavigateNext className="next-i" />
        </button>
        <button>
          <FaRegKeyboard /> <p>Klavye kısayolları</p>{" "}
        </button>
      </div>
      <div className="g-section">
        <button>
          <IoSettingsOutline /> <p>Ayarlar</p>
        </button>
      </div>
      <div className="g-section">
        <button>
          <FaRegQuestionCircle /> <p>Yardım</p>
        </button>
        <button>
          <RiFileWarningLine /> <p>Geri bildirim gönder</p>
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
