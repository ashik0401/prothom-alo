import { Search, User } from "lucide-react";
import logo from "../assets/logo.png";

export default function PreHeader() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4 font-serif text-gray-600 gap-20">
        <img className="w-40 h-15" src={logo} alt="" />

        <div className="xl:flex gap-5 hidden xl:block">
          <div className="flex gap-3 border-r pr-3 border-gray-200">
            <img
              className="w-15 h-15"
              src="https://121clicks.com/wp-content/uploads/2021/01/winter_life_in_villages_of_bangladesh_06.jpg"
              alt=""
            />
            <h2 className="font-medium text-sm">
              Winter Arrives with Crisp Air and Cozy Mornings
            </h2>
          </div>
          <div className="flex gap-3 border-r pr-3 border-gray-200">
            <img
              className="w-15 h-15"
              src="https://cdnfl01.viewbug.com/media/mediafiles/2016/11/29/70007918_large.jpg"
              alt=""
            />
            <h2 className="font-medium text-sm">
              Cold Winds Signal the Start of the Winter Season
            </h2>
          </div>
          <div className="flex gap-3">
            <img
              className="w-15 h-15"
              src="https://live.staticflickr.com/4039/4284845441_de97ff60f9_b.jpg"
              alt=""
            />
            <h2 className="font-medium text-sm">
              Winter Sets In, Transforming Days into Chilly Comfort
            </h2>
          </div>
        </div>

        <div className="flex block xl:hidden">
          <button className="flex items-center border-r border-gray-300 hover:text-blue-600 gap-1 px-2">
            <Search size={20} />
          </button>
          <button className="flex items-center border-gray-300 px-2 hover:text-blue-600 gap-1">
            <User size={20} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
}
