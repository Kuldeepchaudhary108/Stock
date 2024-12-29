import React from "react";

const VideoList = ({ videos, onVideoSelect, completedVideos }) => {
  return (
    <div className="w-1/3 bg-gray-50 p-4 rounded-lg shadow-md dark:bg-zinc-800">
      <h2 className="text-lg font-bold mb-4 dark:text-white">
        Module 1. Introduction to Stock Market (video series)
      </h2>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 dark:text-white">
          Progress: {completedVideos.length}/{videos.length} videos completed
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{
              width: `${(completedVideos.length / videos.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <ul className="space-y-2 max-h-[400px] overflow-y-scroll">
        {videos.map((video, index) => (
          <li
            key={index}
            className={`flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md ${
              completedVideos.includes(index) ? "bg-green-100" : ""
            }`}
            onClick={() => onVideoSelect(index)}
          >
            <span className="text-blue-600 font-medium">
              {index + 1}. {video.title}
            </span>
            <span className="text-gray-500 text-sm">{video.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const VideoPlayer = ({ selectedVideo, markVideoComplete }) => {
  return (
    <div className="w-2/3 p-4">
      <h3 className="text-2xl font-bold mb-4 dark:text-white">
        {selectedVideo.title}
      </h3>
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          src={selectedVideo.url}
          title={selectedVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[440px]"
          onLoad={markVideoComplete} // Mark video as complete when loaded
        ></iframe>
      </div>
    </div>
  );
};

const VideoLesson = () => {
  const videos = [
    {
      title: "Why should you Invest?",
      duration: "00:08:25",
      url: "https://www.youtube.com/embed/example1",
    },
    {
      title: "Market Intermediaries",
      duration: "00:08:58",
      url: "https://www.youtube.com/embed/example2",
    },
    {
      title: "All about the Initial Public Offer (IPO)",
      duration: "00:08:07",
      url: "https://www.youtube.com/embed/example3",
    },
    {
      title: "Why do stock prices fluctuate?",
      duration: "00:03:51",
      url: "https://www.youtube.com/embed/example4",
    },
    {
      title: "How does a trading platform work?",
      duration: "00:07:07",
      url: "https://www.youtube.com/embed/example5",
    },
    {
      title: "How does a trading platform work?",
      duration: "00:07:07",
      url: "https://www.youtube.com/embed/example5",
    },
    {
      title: "How does a trading platform work?",
      duration: "00:07:07",
      url: "https://www.youtube.com/embed/example5",
    },
    {
      title: "How does a trading platform work?",
      duration: "00:07:07",
      url: "https://www.youtube.com/embed/example5",
    },
    {
      title: "How does a trading platform work?",
      duration: "00:07:07",
      url: "https://www.youtube.com/embed/example5",
    },
    {
      title: "How does a trading platform work?",
      duration: "00:07:07",
      url: "https://www.youtube.com/embed/example5",
    },
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = React.useState(0);
  const [completedVideos, setCompletedVideos] = React.useState([]);

  const handleVideoSelect = (index) => {
    setSelectedVideoIndex(index);
  };

  const markVideoComplete = () => {
    if (!completedVideos.includes(selectedVideoIndex)) {
      setCompletedVideos((prev) => [...prev, selectedVideoIndex]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex gap-4">
      <VideoList
        videos={videos}
        onVideoSelect={handleVideoSelect}
        completedVideos={completedVideos}
      />
      <VideoPlayer
        selectedVideo={videos[selectedVideoIndex]}
        markVideoComplete={markVideoComplete}
      />
    </div>
  );
};

export default VideoLesson;
