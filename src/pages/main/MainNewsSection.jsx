"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function MainNewsSection() {
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!newsData.length) return null;

  const section1 = newsData.slice(0, 2);
  const section2 = newsData.slice(2, 5);
  const section3 = newsData.slice(5, 8);

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  const renderSection1 = (item) => (
    <div
      key={item.id}
      className="p-2 border-r last:border-r-0 border-gray-200 hover:text-blue-600 transition-colors cursor-pointer"
      onClick={() => handleClick(item.id)}
    >
      <div className="flex justify-between gap-4">
        <h1 className="font-medium mb-2 text-xl leading-tight">{item.title}</h1>
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-20 object-cover shrink-0"
          />
        )}
      </div>
      <p className="text-gray-600 text-sm">{item.description}</p>
      <p className="text-gray-400 text-xs mt-1">{item.date}</p>
    </div>
  );

  const renderSection2 = (item) => (
    <div
      key={item.id}
      className="p-2 border-r last:border-r-0 border-gray-200 hover:text-blue-600 transition-colors cursor-pointer"
      onClick={() => handleClick(item.id)}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-cover mb-4"
        />
      )}
      <h2 className="font-medium mb-2 text-md leading-tight">{item.title}</h2>
      <p className="text-gray-400 text-xs">{item.date}</p>
    </div>
  );

  const renderSection3 = (item) => (
    <div
      key={item.id}
      className="p-2 border-r last:border-r-0 border-gray-200 hover:text-blue-600 transition-colors cursor-pointer"
      onClick={() => handleClick(item.id)}
    >
      <h2 className="font-medium mb-2 text-md leading-tight">{item.title}</h2>
      <p className="text-gray-600 text-sm">{item.description}</p>
      <p className="text-gray-400 text-xs mt-1">{item.date}</p>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 space-y-0 font-serif text-gray-800">
      <div className="grid md:grid-cols-2 border-b border-gray-300 py-6">
        {section1.map(renderSection1)}
      </div>
      <div className="grid md:grid-cols-3 border-b border-gray-300 py-6">
        {section2.map(renderSection2)}
      </div>
      <div className="grid md:grid-cols-3 py-6">
        {section3.map(renderSection3)}
      </div>
    </section>
  );
}
