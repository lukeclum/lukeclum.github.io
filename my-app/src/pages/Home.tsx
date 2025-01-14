import React, { useState } from "react";
import Link from "../components/Link";
import Tooltip from "../components/Tooltip";
import classNames from "classnames";

function Home() {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number | null>(null);

  const projectLinks = [
    {
      href: null,
      text: "2024 - Increase",
      bgImage: "/assets/increase-hero.jpg",
    },
    {
      href: null,
      text: "2020 - Stripe",
      bgImage: "/assets/stripe-hero.jpg",
    },
    {
      href: "/joule-sous-vide",
      text: "2017 - Joule cooking app",
      bgImage: "/assets/cv-hero.png",
    },
    {
      href: "/joule-packaging",
      text: "2017 - Joule retail packaging",
      bgImage: "/assets/joule-packaging-01.jpg",
    },
    {
      href: "/storyform",
      text: "2014 - Building automated publishing tools",
      bgImage: "/assets/storyform-devices.jpg",
    },
  ];

  return (
    <div className="App-header py-20 px-8 sm:px-20 relative">
      {/* Background Images */}
      <div className={classNames("absolute top-10 left-10 inset-10 z-0 rounded-[12px] overflow-visible blur-sm transition-transform duration-300", hoveredLinkIndex !== null ? "scale-100" : "scale-105")}>
        {projectLinks.map((link, index) => (
          <div
            key={index}
            className={classNames(
              "absolute inset-0 transition-opacity duration-300",
              hoveredLinkIndex === index ? "opacity-10" : "opacity-0"
            )}
            style={{
              backgroundImage: `url(${link.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* <div
        className={classNames(
          "absolute top-10 left-10 inset-10 z-0 rounded-[12px] transition-all duration-300 overflow-visible",
          hoveredLink ? "opacity-10 blur-sm scale-100" : "opacity-0 scale-105"
        )}
      ></div> */}

      {/* Content */}
      <div className="flex flex-col max-w-[400px] relative z-10">
        <h1 className="text-2xl">Hi I'm Luke.</h1>
        <p className="text-base pt-2 text-gray-500">
          I’m a product designer currently building banking infrastructure at{" "}
          <Link href="https://increase.com" text="Increase" className="text-gray-400"/>. Previously, I
          worked on financial products at{" "}
          <Link href="https://stripe.com" text="Stripe" className="text-gray-400"/>, kitchen tools at{" "}
          <Link href="https://chefsteps.com" text="ChefSteps" className="text-gray-400"/>, publishing
          tools at{" "}
          <Tooltip text="💀">
            <span
              className="text-base text-gray-400 w-fit relative 
              before:absolute before:inset-x-0 before:h-0.5 
              before:bg-gray-400 before:bottom-1.5 before:scale-x-0 
              before:origin-left hover:before:scale-x-100 
              before:transition-all cursor-pointer"
            >
              Storyform
            </span>
          </Tooltip>
          , and a variety of other projects.
        </p>
        <Link
          href="mailto:clum.luke@gmail.com"
          text="Get in touch"
          className="pt-6 text-gray-400"
        />
        <Link
          href="https://www.linkedin.com/in/lukeclum/"
          text="LinkedIn"
          className="pt-1 text-gray-400"
        />
      </div>

      {/* Case Studies */}
      <div className="flex flex-col max-w-[400px] pt-10 relative z-10">
        <h2 className="text-base text-medium">A few case studies</h2>
        {projectLinks.map((link, index) =>
          link.href ? (
            <Link
              key={index}
              href={link.href}
              text={link.text}
              className="text-base pt-2 text-gray-400"
              onMouseEnter={() => setHoveredLinkIndex(index)}
              onMouseLeave={() => setHoveredLinkIndex(null)}
            />
          ) : (
            <div
              key={index}
              className="text-base pt-2 text-gray-400 w-fit relative group cursor-pointer text-gray-400"
              onMouseEnter={() => setHoveredLinkIndex(index)}
              onMouseLeave={() => setHoveredLinkIndex(null)}
            >
              {link.text} <span className="bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-1 py-0.5 rounded text-sm">Upon request</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
