import { LuMusic4 } from "react-icons/lu";
import { CiStreamOn } from "react-icons/ci";
import { LuGamepad2 } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";

const DiscoverBtns = [
  {
    icon: (
      <button>
        <LuMusic4 />
      </button>
    ),
    span: <span>Trendler</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <CiStreamOn />
      </button>
    ),
    span: <span>Müzik</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <LuGamepad2 />
      </button>
    ),
    span: <span>Oyun</span>,
    path: "/",
  },
  {
    icon: (
      <button>
        <TfiCup />
      </button>
    ),
    span: <span>Spor</span>,
    path: "/",
  },
];

export default DiscoverBtns;
