import React from "react";

const VideoCard = ({ title, description, thumbnail, link }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105 hover:shadow-lg">
        <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-blue-500 hover:underline font-medium"
          >
            ▶ Play
          </a>
        </div>
      </div>
    </div>
  );
};

const VideoGrid = () => {
  const videos = [
    {
      title: "Impact cost in futures trading",
      description: "Impact cost and how it can ruin a trade.",
      thumbnail: "https://img.youtube.com/vi/m2HiZG0Fhts/mqdefault.jpg",
      link: "https://zerodha.com/varsity/chapter/impact-cost-and-how-it-can-ruin-a-trade",
    },
    {
      title: "5 types of share capital",
      description: "Learn the types of share capital.",
      thumbnail: "https://img.youtube.com/vi/m2HiZG0Fhts/mqdefault.jpg",
      link: "https://zerodha.com/varsity/chapter/share-capital-types",
    },
    {
      title: "How is offer for sale allotment done?",
      description: "Understand the process of OFS allotment.",
      thumbnail: "https://img.youtube.com/vi/m2HiZG0Fhts/mqdefault.jpg",
      link: "https://zerodha.com/varsity/chapter/ofs-allotment",
    },
    {
      title: "How to build a mutual fund portfolio?",
      description: "Building a mutual fund portfolio.",
      thumbnail: "https://img.youtube.com/vi/m2HiZG0Fhts/mqdefault.jpg",
      link: "https://zerodha.com/varsity/chapter/mutual-fund-portfolio",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Videos
        </h2>
        <div className="flex flex-wrap -mx-4">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              link={video.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
