import React from "react";
import { NavLink } from "react-router-dom"; // Fixed incorrect import

const TextModule = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4 mt-10 dark:bg-zinc-900 dark:text-gray-100 m-10 rounded-lg">
      <header className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold">1</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Introduction to Stock Markets
        </h2>
        <div className="flex flex-wrap justify-center m-8">
          <NavLink
            to={"/Video-module"}
            className="text-blue-500 dark:text-blue-300 underline mx-2"
          >
            Watch videos
          </NavLink>
          <a
            href="#"
            className="text-blue-500 dark:text-blue-300 underline mx-2"
          >
            हिंदी
          </a>
          <a
            href="#"
            className="text-blue-500 dark:text-blue-300 underline mx-2"
          >
            Download PDF
          </a>
        </div>
      </header>
      <main>
        {[
          {
            id: 1,
            title: "The Need to Invest",
            content:
              "Learn about the importance of savings. Identify avenues to invest the savings in suitable investment vehicles. Compare historical returns generated by different assets, and know what to expect from you...",
          },
          {
            id: 2,
            title: "Regulators, the guardians of capital markets",
            content:
              "Find out who and how the regulators govern the financial markets and also understand different types of financial market participants. Understand the need to regulate the markets...",
          },
          {
            id: 3,
            title: "Market Intermediaries",
            content:
              "An overview of the financial intermediaries in the Indian stock market and the services they offer...",
          },
          {
            id: 4,
            title: "The IPO Markets (Part 1)",
            content:
              "Understand the origins of business and the funding environment of business. Learn about the different funding stages and...",
          },
          {
            id: 5,
            title: "The IPO Markets (Part 2)",
            content:
              "Understand the origins of business and the funding environment of business. Learn about the different funding stages and...",
          },
          {
            id: 6,
            title: "The Stock Market",
            content:
              "Understand the origins of business and the funding environment of business. Learn about the different funding stages and...",
          },
          {
            id: 7,
            title: "The Stock Market Index",
            content:
              "Understand the origins of business and the funding environment of business. Learn about the different funding stages and...",
          },
          {
            id: 8,
            title: "Commonly Used Jargons",
            content:
              "Understand the origins of business and the funding environment of business. Learn about the different funding stages and...",
          },
        ].map((section) => (
          <section className="mb-6" key={section.id}>
            <h3 className="text-xl md:text-2xl font-medium">{section.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              {section.content}
            </p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default TextModule;
