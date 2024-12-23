import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { LuClock } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdCut } from "react-icons/io";

const MeBtns = [
  {
    icon: (
      <button>
        <MdHistory />
      </button>
    ),
    span: <span>Geçmiş</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <MdOutlinePlaylistPlay />
      </button>
    ),
    span: <span>Oynatma listeleri</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <GoVideo />
      </button>
    ),
    span: <span>Videolarınız</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <LuClock />
      </button>
    ),
    span: <span>Daha sonra izle</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <AiOutlineLike />
      </button>
    ),
    span: <span>Beğendiğim videolar</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <IoMdCut />
      </button>
    ),
    span: <span>Klipleriniz</span>,
    path: "/",
  },
];

export default MeBtns;
