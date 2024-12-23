import { CiStreamOn } from "react-icons/ci";
import teacher from "/assets/subscribes/mehmetcanseyhan.jpg";
import cifraclub from "../../../assets/subscribes/cifraclub.jpg";
import c50 from "../../../assets/subscribes/cs50.jpg";
import codecamp from "../../../assets/subscribes/freecodecamp.jpg";
import hafif from "../../../assets/subscribes/hafifprograming.jpg";
import lofi from "../../../assets/subscribes/lofihiphop.jpg";
import tolga from "../../../assets/subscribes/tolgaözuygur.jpg";
import user from "../../../assets/subscribes/user.png";
const SubscribeBtns = [
  {
    icon: (
      <button>
        <CiStreamOn />
      </button>
    ),
    span: <span>Mehmet Can Seyhan</span>,
    path: "/",
    img: <img src={teacher} />,
  },
  {
    icon: (
      <button>
        <CiStreamOn />
      </button>
    ),
    span: <span>Cifra Club</span>,
    path: "/",
    img: <img src={cifraclub} />,
  },
  {
    icon: (
      <button>
        <CiStreamOn />
      </button>
    ),
    span: <span>CS50</span>,
    path: "/",
    img: <img src={c50} />,
  },
  {
    icon: (
      <button>
        <CiStreamOn />
      </button>
    ),
    span: <span>FreeCodeCamp</span>,
    path: "/",
    img: <img src={codecamp} />,
  },
  {
    icon: (
      <button>
        <CiStreamOn />
      </button>
    ),

    span: <span>hafifprograming</span>,
    path: "/",
    img: <img src={hafif} />,
  },
  {
    icon: (
      <button>
        <CiStreamOn />
      </button>
    ),

    span: <span>Lofi Time</span>,
    path: "/",
    img: <img src={lofi} />,
  },
  {
    span: <span>Tolga Özuygur</span>,
    path: "/",
    img: <img src={tolga} />,
  },
  {
    icon: "",
    span: <span>Subscribe 1</span>,
    path: "/",
    img: <img src={user} />,
  },
  {
    icon: "",
    span: <span>Subscribe 2</span>,
    path: "/",
    img: <img src={user} />,
  },
  {
    icon: "",
    span: <span>Subscribe 4</span>,
    path: "/",
    img: <img src={user} />,
  },
  {
    icon: "",
    span: <span>Subscribe 5</span>,
    path: "/",
    img: <img src={user} />,
  },
  {
    icon: "",
    span: <span>Subscribe 6</span>,
    path: "/",
    img: <img src={user} />,
  },
  {
    icon: "",
    span: <span>Subscribe 7</span>,
    path: "/",
    img: <img src={user} />,
  },
  {
    icon: "",
    span: <span>Subscribe 8</span>,
    path: "/",
    img: <img src={user} />,
  },
  {
    icon: "",
    span: <span>Subscribe 9</span>,
    path: "/",
    img: <img src={user} />,
  },
  {
    icon: "",
    span: <span>Subscribe 10</span>,
    path: "/",
    img: <img src={user} />,
  },
];

export default SubscribeBtns;
