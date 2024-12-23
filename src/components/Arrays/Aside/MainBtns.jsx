import { HiOutlineHome } from "react-icons/hi2";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const MainBtns = [
  {
    icon: (
      <button>
        <HiOutlineHome />
      </button>
    ),
    span: <span>Ana Sayfa</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <SiYoutubeshorts />
      </button>
    ),
    span: <span>Shorts</span>,

    path: "/",
  },
  {
    icon: (
      <button>
        <MdOutlineSubscriptions />
      </button>
    ),
    span: <span>Abonelikler</span>,

    path: "/",
  },
];

export default MainBtns;
