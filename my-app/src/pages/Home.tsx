import React from "react";
import Link from "../components/Link";
import Tooltip from "../components/Tooltip";

function Home() {
  return (
    <div className="App-header py-20 px-8 sm:px-20">
      <div className="flex flex-col max-w-[400px]">
        <h1 className="text-base text-medium">Hi I'm Luke.</h1>
        <p className="text-sm pt-2 text-gray-500">
          I’m a product designer currently building banking infrastructure at{" "}
          <Link href="https://increase.com" text="Increase" />. Previously, I
          worked on financial products at{" "}
          <Link href="https://stripe.com" text="Stripe" />, kitchen tools at{" "}
          <Link href="https://chefsteps.com" text="ChefSteps" />, publishing
          tools at{" "}
          <Tooltip text="💀">
            <span
              className="text-sm text-gray-400 w-fit relative 
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
          className="pt-6"
        />
        <Link
          href="https://www.linkedin.com/in/lukeclum/"
          text="LinkedIn"
          className="pt-1"
        />
      </div>
    </div>
  );
}

export default Home;
