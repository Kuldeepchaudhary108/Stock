import React from "react";

const BlogCard = ({ title, description, author, authorRole, date, image }) => {
  return (
    <div className="border dark:border-gray-700 rounded-lg shadow-sm p-4 flex flex-col md:flex-row gap-4 md:gap-8 bg-white dark:bg-zinc-900 transition-colors">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt=""
          className="w-full h-48 md:w-56 md:h-56 object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
          <div>
            <span>{author}</span> &bull; <span>{authorRole}</span>
          </div>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

const BlogList = () => {
  const blogs = [
    {
      title: "Why Does A Weak Rupee Upset Us?",
      description:
        "The Indian Rupee is technically a free-floating currency. Practically, it is a managed free-floating currency...",
      author: "Vineet Rajani",
      authorRole: "CFA, Macroeconomics Analyst",
      date: "27 Dec 2024",
      image:
        "https://zerodha.com/z-connect/wp-content/uploads/2024/12/Blog_Cover-22-216x150.png",
    },
    {
      title:
        "Avoid surprises: why disclosures are important in a health insurance policy",
      description:
        "When it comes to health insurance plans, every policyholder has one essential requirement—transparency from the insurer...",
      author: "Shrehith Karkera",
      authorRole: "Co-Founder, Ditto Insurance",
      date: "20 Dec 2024",
      image:
        "https://zerodha.com/z-connect/wp-content/uploads/2024/12/Blog_Cover-19-1-216x150.png",
    },
    {
      title:
        "Avoid surprises: why disclosures are important in a health insurance policy",
      description:
        "When it comes to health insurance plans, every policyholder has one essential requirement—transparency from the insurer...",
      author: "Shrehith Karkera",
      authorRole: "Co-Founder, Ditto Insurance",
      date: "20 Dec 2024",
      image:
        "https://zerodha.com/z-connect/wp-content/uploads/2024/12/Blog_Cover-19-1-216x150.png",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-zinc-900 transition-colors">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Varsity</h1>
      <div className="flex gap-2 mb-4 text-center dark:text-gray-300">
        Top tags :
        <span className="text-blue-500 text-sm cursor-pointer hover:text-blue-700 dark:hover:text-blue-400">
          #personal finance
        </span>
        <span className="text-blue-500 text-sm cursor-pointer hover:text-blue-700 dark:hover:text-blue-400">
          #zerodha news
        </span>
        <span className="text-blue-500 text-sm cursor-pointer hover:text-blue-700 dark:hover:text-blue-400">
          #inflation
        </span>
      </div>
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
