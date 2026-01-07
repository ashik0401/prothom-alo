import { useState } from "react";
import {
  Search,
  Newspaper,
  Globe,
  User,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Play,
  Apple,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(null);

  const categories = [
    {
      name: "Bangladesh",
      topics: ["Politics", "Economy", "Crime", "Education", "Environment"],
    },
    {
      name: "International",
      topics: ["Asia", "Europe", "America", "Middle East", "World Politics"],
    },
    {
      name: "Sports",
      topics: ["Cricket", "Football", "Tennis", "Hockey", "Others"],
    },
    {
      name: "Opinion",
      topics: ["Editorial", "Column", "Analysis", "Interview", "Letters"],
    },
    {
      name: "Business",
      topics: ["Markets", "Startups", "Banking", "Trade", "Economy"],
    },
    {
      name: "Youth",
      topics: ["Career", "Campus", "Technology", "Inspiration", "Skills"],
    },
    {
      name: "Entertainment",
      topics: ["Movies", "Music", "OTT", "Celebrities", "TV"],
    },
    {
      name: "Lifestyle",
      topics: ["Health", "Travel", "Food", "Fashion", "Wellbeing"],
    },
    {
      name: "Claim vs Fact",
      topics: ["Fact Check", "Viral Claims", "Explainers", "Truth Report"],
    },
  ];

  return (
    <header className="w-full fixed top-23 border-y left-0 z-50 bg-white  border-gray-300 font-serif">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <ul
            className="flex gap-4 text-sm font-bold text-gray-800 overflow-x-auto whitespace-nowrap
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((c) => (
              <li
                key={c.name}
                className="shrink-0 cursor-pointer hover:text-blue-600"
              >
                {c.name}
              </li>
            ))}
          </ul>

          <div className="flex items-center text-sm text-gray-700 text-nowrap">
            <button className="hidden md:flex items-center border-l border-r h-10 border-gray-300 px-2 hover:text-blue-600 gap-1">
              <Search size={16} />
              <span>Search</span>
            </button>
            <button className="hidden md:flex items-center border-r h-10 border-gray-300 px-2 hover:text-blue-600 gap-1">
              <Newspaper size={16} />
              <span>E-Paper</span>
            </button>
            <button className="flex items-center border-r border-l md:border-l-0 h-10 border-gray-300 px-2 hover:text-blue-600 gap-1">
              <Globe size={16} />
              <span>ENG</span>
            </button>
            <button className="hidden md:flex items-center h-10 border-r border-gray-300 px-2 hover:text-blue-600 gap-1">
              <User size={16} />
              <span>Login</span>
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 h-10 border-r border-gray-300"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed xl:px-60 px-4 z-50 top-0 right-0 h-full w-full bg-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4 border-b border-gray-300">
          <img className="w-40 h-15" src={logo} alt="" />
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex h-full">
          <div className="w-3/4 overflow-y-auto border-r border-gray-300 hidden md:block">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="border-b border-gray-200 px-6 py-4 flex"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-2">
                  <span>{cat.name}</span>
                  <ChevronRight size={16} className="text-red-600" />
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700">
                  {cat.topics.map((t) => (
                    <span
                      key={t}
                      className="cursor-pointer hover:text-blue-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/3 p-6 overflow-y-auto space-y-8 text-sm text-gray-800">
            <div className="md:flex justify-around gap-4 border-b pb-5 border-gray-400 hidden md:block">
              <button className="flex items-center border border-gray-300 px-2 justify-center rounded hover:text-blue-600 gap-1 w-full cursor-pointer">
                <User size={16} />
                <span>Login</span>
              </button>
              <button className="w-full flex items-center border justify-center py-2 border-gray-300 rounded px-2 hover:text-blue-600 gap-1 cursor-pointer">
                <Search size={16} />
                <span>Search</span>
              </button>
            </div>

            <div className="space-y-3 border-b pb-5 border-gray-400 hidden md:block">
              <div className="font-semibold">Follow us</div>
              <div className="flex gap-4 text-gray-400">
                <Facebook
                  size={35}
                  className="border rounded-full p-1 text-blue-600 border-gray-300 cursor-pointer hover:text-white hover:bg-blue-600"
                />
                <Twitter
                  size={35}
                  className="border rounded-full p-1 cursor-pointer hover:text-white border-gray-300 hover:bg-black text-black"
                />
                <Instagram
                  size={35}
                  className="border rounded-full p-1 cursor-pointer hover:text-white border-gray-300 hover:bg-pink-600 text-pink-600"
                />
                <Youtube
                  size={35}
                  className="border rounded-full p-1 cursor-pointer hover:text-white border-gray-300 hover:bg-red-600 text-red-600"
                />
                <Globe
                  size={35}
                  className="border rounded-full p-1 cursor-pointer hover:text-white hover:bg-blue-500 border-gray-300 text-blue-500"
                />
              </div>
            </div>

            <div className="space-y-3 hidden md:block border-b py-5 border-gray-400">
              <div className="font-semibold">Download mobile apps</div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 border px-2 py-1 rounded cursor-pointer border-gray-300 hover:text-green-600 text-gray-600">
                  <Play />
                  <span>Play Store</span>
                </div>
                <div className="flex items-center gap-2 border px-2 py-1 rounded cursor-pointer hover:text-black border-gray-300 text-gray-600">
                  <Apple />
                  <span>App Store</span>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              {categories.map((cat, i) => (
                <div key={cat.name} className="border-t border-gray-200">
                  <button
                    onClick={() =>
                      setActiveCat(activeCat === i ? null : i)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 font-bold text-sm text-gray-900"
                  >
                    <span>{cat.name}</span>
                    {activeCat === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {activeCat === i && (
                    <div className="px-4 pb-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700">
                      {cat.topics.map((t) => (
                        <span
                          key={t}
                          className="cursor-pointer hover:text-blue-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-5 border-y border-gray-400 py-10">
                <button className="flex items-center hover:text-blue-600 gap-1 text-2xl">
                  <Newspaper size={30} />
                  <span>E-Paper</span>
                </button>
                <button className="flex items-center hover:text-blue-600 gap-1 text-2xl">
                  <Globe size={30} />
                  <span>ENG</span>
                </button>
              </div>
              <div className="font-semibold pt-5">Follow us</div>
              <div className="flex gap-4 text-gray-400 pb-5">
                <Facebook
                  size={35}
                  className="border rounded-full p-1 text-blue-600 border-gray-300 cursor-pointer hover:text-white hover:bg-blue-600"
                />
                <Twitter
                  size={35}
                  className="border rounded-full p-1 cursor-pointer hover:text-white border-gray-300 hover:bg-black text-black"
                />
                <Instagram
                  size={35}
                  className="border rounded-full p-1 cursor-pointer hover:text-white border-gray-300 hover:bg-pink-600 text-pink-600"
                />
                <Youtube
                  size={35}
                  className="border rounded-full p-1 cursor-pointer hover:text-white border-gray-300 hover:bg-red-600 text-red-600"
                />
                <Globe
                  size={35}
                  className="border rounded-full p-1 cursor-pointer hover:text-white hover:bg-blue-500 border-gray-300 text-blue-500"
                />
              </div>
              <div className="font-semibold pt-5 border-t border-gray-400 pb-2">
                Download mobile apps
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 border px-2 py-1 rounded cursor-pointer border-gray-300 hover:text-green-600 text-gray-600">
                  <Play />
                  <span>Play Store</span>
                </div>
                <div className="flex items-center gap-2 border px-2 py-1 rounded cursor-pointer hover:text-black border-gray-300 text-gray-600">
                  <Apple />
                  <span>App Store</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 md:block hidden">
              <div className="font-semibold">Initiatives of Prothom Alo</div>
              <ul className="space-y-1 text-gray-700 grid grid-cols-2 gap-3">
                <li className="hover:text-blue-600 cursor-pointer border text-center py-2 rounded border-gray-300">
                  Epaper
                </li>
                <li className="hover:text-blue-600 cursor-pointer border text-center py-2 rounded border-gray-300">
                  Trust
                </li>
                <li className="hover:text-blue-600 cursor-pointer border text-center py-2 rounded border-gray-300">
                  Nagorik-Songbad
                </li>
                <li className="hover:text-blue-600 cursor-pointer border text-center py-2 rounded border-gray-300">
                  Chironton71
                </li>
                <li className="hover:text-blue-600 cursor-pointer border text-center py-2 rounded border-gray-300">
                  Kishoralo
                </li>
                <li className="hover:text-blue-600 cursor-pointer border text-center py-2 rounded border-gray-300">
                  Bigganchinta
                </li>
                <li className="hover:text-blue-600 cursor-pointer border text-center py-2 rounded border-gray-300">
                  Bondhushava
                </li>
                <li className="hover:text-blue-600 cursor-pointer border text-center py-2 rounded border-gray-300">
                  Prothoma
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs border-t py-5 border-gray-400">
              <span className="hover:text-blue-600 cursor-pointer">Prothom Alo</span>
              <span>•</span>
              <span className="hover:text-blue-600 cursor-pointer">Advertise</span>
              <span>•</span>
              <span className="hover:text-blue-600 cursor-pointer">Terms of Use</span>
              <span>•</span>
              <span className="hover:text-blue-600 cursor-pointer">Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
