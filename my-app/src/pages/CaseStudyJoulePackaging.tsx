import React from "react";

function CaseStudyJoulePackaging() {
  return (
    <div className="relative py-20 w-full">
      <div className="w-full md:w-[300px] px-10 fixed top-20 left-0">
        <p className="text-base">
          Luke Clum
          <br />
          Chefsteps, 2018
        </p>
      </div>
      <div>
        <div className="text-wrapper">
          <h1 className="text-2xl">Joule Retail</h1>
          <h2 className="text-lg">Overview</h2>
          <p className="text-base">
            As Joule started to make its way onto store shelves, we needed to
            redesign the packaging to better perform in a retail environment.
            Fellow designer Emmett Barton and I took 2 weeks to overhaul Joule's
            packaging.
          </p>
        </div>
        <div className="w-full max-w-[1600px] mx-auto mb-10 px-10">
          <img
            className="w-full rounded-[12px]"
            src="/assets/joule-packaging-01.jpg"
            alt="New York Times Snowfall"
          />
        </div>
        <div className="text-wrapper">
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
              src="/assets/joule-packaging-03.jpg"
              alt="New York Times Snowfall"
            />
          </div>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/joule-packaging-04.jpg"
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
