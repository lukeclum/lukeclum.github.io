import React from "react";
import Link from "../components/Link";

function CaseStudyJoulePackaging() {
  return (
    <div className="relative py-20 w-full">
      <div className="inset-x-6 top-8 md:w-auto px-3 py-2 fixed md:top-12 md:left-12 md:right-auto z-20 rounded flex flex-row md:flex-col items-center md:items-start justify-between bg-gray-50 border border-gray-100">
        <p className="text-base font-bold mb-0">
          <Link
            href="/"
            text="Luke Clum"
            className="text-black before:bg-blue-400"
          />
        </p>
        <code>Chefsteps, 2017</code>
      </div>
      <div className="w-full mx-auto">
        <div className="text-wrapper">
          <h1>Joule retail packaging</h1>
          <h4>
            When Joule was set to hit store shelves, we recognized the need to
            redesign the packaging for better performance in a retail
            environment. Fellow designer Emmett Barton and I collaborated on a
            complete packaging overhaul, completing the redesign in just two
            weeks.
          </h4>
        </div>
        <div className="w-full max-w-[1600px] mx-auto my-8 px-5 md:px-10">
          <img
            className="w-full rounded-[12px]"
            src="/assets/joule-packaging-01.jpg"
            alt="New York Times Snowfall"
          />
        </div>
        <div className="w-full max-w-[1600px] mx-auto my-8 px-5 md:px-10 flex flex-col md:flex-row gap-8">
          <div className="relative">
            <img
              className="w-full rounded-[12px]"
              src="/assets/joule-packaging-04.jpg"
              alt="New York Times Snowfall"
            />
          </div>
          <div className="relative">
            <img
              className="w-full rounded-[12px]"
              src="/assets/joule-packaging-03.jpg"
              alt="New York Times Snowfall"
            />
          </div>
        </div>
        <div className="w-full max-w-[1000px] mx-auto my-8 px-5 md:px-10">
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/joule-packaging-02.jpg"
              alt="New York Times Snowfall"
            />
          </div>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/joule-packaging-dielines.jpg"
              alt="New York Times Snowfall"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyJoulePackaging;
