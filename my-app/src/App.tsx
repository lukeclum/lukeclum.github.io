import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header py-20 px-8 sm:px-20">
        <div className="flex flex-col max-w-[400px]">
          <h1 className="text-base text-medium">Hi i'm Luke.</h1>
          <p className="text-sm pt-2 text-gray-500">
            I’m a product designer currently building{" "}
            <a
              href="https://increase.com"
              className="text-sm text-gray-400 underline decoration-blue-700 underline-offset-2"
            >
              Increase
            </a>
            . Previously, I built financial products at{" "}
            <a
              href="https://stripe.com"
              className="text-sm text-gray-400 underline decoration-blue-700 underline-offset-2"
            >
              Stripe
            </a>
            , kitchen tools at{" "}
            <a
              href="https://chefsteps.com"
              className="text-sm text-gray-400 underline decoration-blue-700 underline-offset-2"
            >
              ChefSteps
            </a>
            , publishing tools at Storyform, and a host of other gigs.
          </p>
          <a
            href="mailto:clum.luke@gmail.com"
            className="text-sm pt-6 text-gray-400 underline decoration-blue-700 underline-offset-2 w-fit"
          >
            Get in touch
          </a>
          <a
            href="https://www.linkedin.com/in/lukeclum/"
            className="text-sm pt-1 text-gray-400 underline decoration-blue-700 underline-offset-2 w-fit"
          >
            LinkedIn
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
