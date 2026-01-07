import { Facebook, Globe, Instagram, Twitter, Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("/newsItems.json")
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data);
        const selectedNews = data.find((n) => n.id === parseInt(id));
        setNews(selectedNews);
      });
  }, [id]);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 font-serif">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-serif">
      <h1 className="text-red-600 text-sm mb-2">{news.shortTitle}</h1>
      <h2 className="text-2xl font-bold mb-4">{news.title}</h2>
      <div className="flex justify-between items-center py-2">
        <h2 className=" font-medium text-sm  text-gray-500 ">
        Published: {news.date}
      </h2>
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
      
      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          className=" w-full h-auto object-cover rounded mb-2"
        />
      )}
      {news.caption && (
        <p className="text-xs text-gray-500 mb-4">{news.caption}</p>
      )}
      <p className="text-gray-700 leading-relaxed mb-4">
        {news.longDescription || news.description}
      </p>

      <aside className="mt-8">
        <h3 className="font-semibold mb-2">Other News</h3>
        <div className="flex flex-col gap-3">
          {allNews
            .filter((n) => n.id !== news.id)
            .map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="text-gray-800 hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
        </div>
      </aside>
    </div>
  );
};

export default NewsDetails;
