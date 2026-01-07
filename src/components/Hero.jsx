import React from "react";
import { useNavigate } from "react-router";

const CricketHero = () => {
  const navigate = useNavigate();

  const news = {
    id: 101,
    shortTitle: "Tigers' Roar:",
    title: "Bangladesh secures historic series victory against World Champions",
    description: "In a thrilling finale at Mirpur, the Bangladesh cricket team defeated the visiting giants by 5 wickets to clinch the three-match ODI series 2-1....",
    longDescription: "In a historic match at Mirpur, Bangladesh Cricket Team defeated the visiting world champions by 5 wickets. The game was intense and saw incredible performances by key players. Fans celebrated the historic series victory across the country. Full details include player statistics, expert analysis, and post-match interviews.",
    image: "https://www.bssnews.net/assets/news_photos/2024/12/29/image-234179-1735461333.jpg",
    caption: "Tigers celebrates after taking a crucial wicket. Photo: ICC/Getty Images"
  };

  const handleClick = () => {
    navigate(`/news/${news.id}`);
  };

  return (
    <section className="mx-auto font-serif border-b border-gray-300 pb-8 mb-8 w-11/12">
      <div className="flex flex-col gap-3 lg:flex-row justify-between">
        <div className="w-full lg:w-3/5 cursor-pointer" onClick={handleClick}>
          <div className="relative overflow-hidden">
            <img
              src={news.image}
              alt="Cricket Match"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
            {news.caption}
          </p>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col justify-center cursor-pointer" onClick={handleClick}>
          <h1 className="text-xl md:text-2xl font-extrabold leading-tight mb-4 hover:underline underline-offset-4 decoration-red-600">
            <span className="text-red-600 block mb-1">{news.shortTitle}</span>
            <span className="text-gray-900">{news.title}</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">{news.description}</p>
        </div>
      </div>
    </section>
  );
};

export default CricketHero;
