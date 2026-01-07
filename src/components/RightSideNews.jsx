import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const RightSideNews = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/newsItems.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <aside className="w-full max-w-100 font-serif px-2 text-gray-800">
      <div className="flex flex-col">
        {news.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/news/${item.id}`)}
            className="py-5 border-b border-gray-200 last:border-0 group cursor-pointer"
          >
            {item.type === "split" ? (
              <div className="flex gap-4 items-start">
                <div className="flex-1">
                  <h3 className="text-[17px] font-medium leading-snug group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt=""
                  className="w-24 h-18 object-cover rounded shadow-sm bg-gray-100"
                />
              </div>
            ) : (
              <div>
                <h3 className="text-[17px] font-medium leading-snug group-hover:text-blue-600 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            )}
            <div className="text-sm text-gray-500 mt-2 ">{item.date}</div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSideNews;
