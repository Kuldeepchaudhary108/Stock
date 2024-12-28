// pages/LessonPage.jsx
import React from "react";

const LessonPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Lesson Title</h2>
      <p className="text-gray-700">
        This is where the lesson content will go. Use Tailwind CSS for a clean
        and responsive layout.
      </p>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500">
          Previous
        </button>
        <button className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default LessonPage;
