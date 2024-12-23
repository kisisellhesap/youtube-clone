import { IoSettingsOutline } from "react-icons/io5";
import { FiFlag } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsExclamationSquare } from "react-icons/bs";

const SettingsBtns = [
  {
    icon: (
      <button>
        <IoSettingsOutline />
      </button>
    ),
    span: <span>Ayarlar</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <FiFlag />
      </button>
    ),
    span: <span>İçerik bildirme geçmişi</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <FaRegQuestionCircle />
      </button>
    ),
    span: <span>Yardım</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <BsExclamationSquare />
      </button>
    ),
    span: <span>Geri bildirim gönder</span>,
    path: "/",
  },
];

export default SettingsBtns;
