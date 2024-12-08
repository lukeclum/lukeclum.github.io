import React from "react";

function CaseStudyJoule() {
  return (
    <div className="relative py-20 w-full">
      <div className="w-full md:w-[300px] px-10 fixed top-20 left-0">
        <p className="text-base">
          Luke Clum
          <br />
          ChefSteps, 2017
        </p>
      </div>
      <div>
        <div className="text-wrapper">
          <h1 className="text-2xl">Joule Sous Vide Cooking</h1>
          <h2 className="text-lg">Overview</h2>
          <p className="text-base">
            ChefSteps, founded by the creators of Modernist Cuisine, aimed to
            empower home cooks with tools and content to make cooking precise,
            predictable, and accessible. I joined ChefSteps in 2015, and a year
            later we released Joule—the world’s first connected sous vide device
            controlled via a mobile app. We quickly sold over 250,000 units and
            became a clear leader in connected kitchen technology.
          </p>
        </div>
        <div className="w-full max-w-[1600px] mx-auto mb-10 px-10">
          <img
            src="/assets/cv-hero.png"
            alt="Joule cook flow"
            className="rounded-[12px]"
          />
        </div>
        <div className="text-wrapper">
          <p className="text-base">
            By 2017, however, the app faced growing user frustrations—from
            unstable connectivity to confusing workflows. To address these
            issues, I was tasked with leading a complete redesign of the Joule
            app, improving its usability and revitalizing the core cooking
            experience.
          </p>
          <h2 className="text-lg">What is sous vide?</h2>
          <p className="text-base">
            Before we begin, it’s helpful to know what sous vide is. Sous vide
            is a cooking technique that uses water to cook foods to precise
            temperatures, allowing for extremely consistent and high quality
            results. Food is sealed in a bag and immersed in water heated to a
            specific temperature. This allows the food to be consistently cooked
            without risk of overcooking (unlike traditional methods).
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/joule-lifestyle-02.jpg"
              alt="Research"
            />
          </div>
          <p className="text-base">
            Once heated, the food is flash seared and served. While not the most
            widely used method of cooking, it’s extremely effective and
            frequently used in the world’s best restaurants. In 2016, ChefSteps
            was the primary resource for home sous vide cooking and released
            Joule to help make this tactic easier and more accessible.
          </p>
          <h2 className="text-lg">Identifying the problems</h2>
          <p className="text-base">
            After helping launch the product the year prior, I needed to gather
            and consolidate feedback from our growing user base. Over a period
            of a few weeks, I conducted a mix of qualitative and quantitative
            research. This included:
          </p>
          <ul className="list-disc pl-8">
            <li>
              Remote contextual Interviews: I interviewed 15 users, representing
              power users, occasional users, and new customers. These 45-minute
              sessions uncovered details about their cooking habits,
              frustrations, and aspirations.
            </li>
            <li>
              In-person shadowing: I traveled to users’ homes, and watched them
              cook different meals with Joule, documenting patterns and pain
              points.
            </li>
            <li>
              Review Analysis: I performed a deep dive into thousands of user
              reviews from iOS, Android, and Amazon, identifying patterns among
              satisfied and dissatisfied customers.
            </li>
          </ul>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/cook-research.jpg"
              alt="Research"
            />
          </div>
          <p className="text-base">
            It quickly became clear to us that users were struggling with
            significant components of the basic cooking process. After
            synthesizing the research, I identified a few key problems that
            needed to be addressed:
          </p>
          <ul className="list-disc pl-8">
            <li>
              Unstable Connections: Joule’s reliance on both Bluetooth and Wi-Fi
              meant inconsistent performance, which was particularly frustrating
              given the app-centric design.
            </li>
            <li>
              Performance Lag: The app’s heavy reliance on video content led to
              slow load times, especially on lower-end devices.
            </li>
            <li>
              Confusing Onboarding: First-time users struggled with the
              unconventional sous vide process and lacked clear guidance within
              the app.
            </li>
            <li>
              Fragmented Data: Critical information was scattered, and users
              often missed key notifications, leaving them unsure about the
              status of their cooks.
            </li>
            <li>
              Error Recovery: When problems occurred—missed notifications,
              errors during cooking—users had little recourse to recover.
            </li>
          </ul>
          <h2 className="text-lg">Building the Technical Foundation</h2>
          <p className="text-base">
            Addressing the connectivity and performance issues required more
            than a surface-level redesign—it demanded structural changes to the
            system. Joule operated using what we called the "Holy Trinity" of
            connections: the device could communicate with the phone via
            Bluetooth, with the cloud via Wi-Fi, and indirectly through the
            phone-to-cloud pathway. Unfortunately, these systems were not
            synchronized, leading to data inconsistencies across devices.
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/data-distributed.png"
              alt="Distributed data"
            />
          </div>
          <p className="text-base">
            I worked closely with our firmware engineers to establish Joule as
            the source of truth for all cooking data. This change ensured that
            regardless of connection type, the app would always retrieve the
            correct information directly from the device. To address other
            performance concerns, we began rebuilding portions of the app in
            React Native (a relatively new technology at that time).
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/data-joule.png"
              alt="Single data source"
            />
          </div>
          <h2 className="text-lg">Design explorations</h2>
          <p className="text-base">
            With the technical foundation in place, I turned my attention to
            redesigning the user interface and experience. My approach was to
            balance user needs with long-term scalability, ensuring the new
            design could grow with future features. I outlined five key
            objectives for the redesign:
          </p>
          <ul className="list-disc pl-8">
            <li>Users should easily understand their current cooking state.</li>
            <li>
              Users should feel confident about when to add and remove their
              food.
            </li>
            <li>Error recovery should be intuitive and transparent.</li>
            <li>The cooking process should require minimal interactions.</li>
            <li>
              The design should be flexible enough to accommodate future
              products.
            </li>
          </ul>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px] border border-gray-200"
              src="/assets/cv-explorations.png"
              alt="Design explorations"
            />
          </div>
          <p className="text-base">
            I began by wireframing potential solutions in Sketch (this was 2017
            after all) and quickly transitioned to Framer for interactive
            prototypes. These high-fidelity prototypes closely mirrored the
            final product, allowing for effective usability testing with both
            internal stakeholders and external users through moderated sessions
            and usertesting.com.
          </p>
          <p className="text-base">
            One of the first challenges was to address the disconnect between
            how we expected users to cook and how they actually cooked. In
            theory, users would follow a linear process: preheat the water, add
            the food, and then start a timer.{" "}
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/autostart-timeline-1.png"
              alt="adding food"
            />
          </div>
          <p className="text-base">
            In reality, many users frontloaded actions—they would add food to
            the water before preheating and then miss critical notifications to
            start their timers. With no data to fall back to, users frequently
            were confused about when their food was ready. This resulted in an
            average delay of 10-12 minutes.
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/autostart-timeline-2.png"
              alt="adding food"
            />
          </div>
          <p className="text-base">
            To accommodate this behavior, we introduced auto-start timers, which
            allowed users to initiate a cook with a single button, immediately
            add their food, and have the timer automatically start when the
            water reached the desired temperature. This simple yet powerful
            feature reduced average delays to just 27 seconds and alleviated one
            of our biggest pain points for users.{" "}
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/autostart-timeline-3.png"
              alt="adding food"
            />
          </div>
          <p className="text-base">
            However, while seemingly straightforward, there were significant
            technical challenges related to setting an accurate timer in the app
            via bluetooth if the user walked out of range from the device—at the
            time Bluetooth did not provide a reliable method to passively update
            state within backgrounded apps. To mitigate these risks, we tested
            multiple techniques and ended up leveraging an “optimistic” fallback
            notification that incentivized the user to walk into bluetooth range
            and open the app if we didn’t detect a water heated event.{" "}
          </p>
          <h2 className="text-lg">Systems</h2>
          <p className="text-base">
            Building on these technical and workflow related improvements, I
            redesigned the entire cooking interface. At the core of these
            improvements was a new “cook view” which consisted of two key
            patterns which proved to be particularly robust (7 years later this
            design is still being used).
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/cv-sections.png"
              alt="Cook view layout"
            />
          </div>
          <p className="text-base">
            Status Area: A glanceable, color-coded section providing real-time
            updates on cooking progress. Stages were simplified into three clear
            steps: preheating, cooking, and holding.
          </p>
          <p className="text-base">
            Action Cards: An expandable array of interactive controls for
            starting timers, accessing recipes, and managing errors.
          </p>
          <p className="text-base">
            Additionally, I built a host of new components, hand drew new icons, and rebased our app onto a proper design system. 
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/ds-icons.png"
              alt="Icons"
            />
          </div>
          <p className="text-base">
            Altogether, this system allowed us to release multiple new features.
          </p>
          <h2 className="text-lg">A more comprehensive cooking dashboard</h2>
        </div>
        <div className="w-full max-w-[1600px] mx-auto mb-10 px-10">
          <img
            src="/assets/cook-closer.jpg"
            alt="Joule cook flow"
            className="rounded-[12px]"
          />
        </div>
        <div className="text-wrapper">
          <h3 className="text-md">Simple, Glanceable Status</h3>
          <p className="text-base">
            To help cut through the chaos of the kitchen, we designed a simple,
            glanceable view that would quickly communicate the status of the
            cook and showcase only the most relevant information.
          </p>
          <div className="video-container relative mb-8">
            <video
              className="w-full rounded-[12px]"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              <source src="/assets/cv-status-gray.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 className="text-md">Detailed Cooking Stats</h3>
          <p className="text-base">
            To help with missed notifications and meal planning we included a
            comprehensive timeline of cooking events. This was particularly
            helpful for users completing longer cooks (more than 24 hours).
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/cv-timeline.png"
              alt="cook timeline"
            />
          </div>
          <h3 className="text-md">Autostart-gray Timers</h3>
          <p className="text-base">
            In order to reduce unnecessary touch points, we decided to encourage
            users to drop their food early and let Joule automatically start
            their timer once their water was heated. This addressed one of our
            most common user complaints.
          </p>
          <div className="video-container relative mb-8">
            <video
              className="w-full rounded-[12px]"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              <source src="/assets/cv-autostart-gray.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 className="text-md">Hold Times</h3>
          <p className="text-base">
            To highlight flexibility of sous vide and reassure users that their
            food could remain in the water without overcooking, we introduced
            the concept of “hold times.” This new product feature told users
            exactly how long their food could remain in the water before there
            was any significant difference.
          </p>
          <div className="video-container relative mb-8">
            <video
              className="w-full rounded-[12px]"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              <source src="/assets/cv-holding-gray.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 className="text-md">Error Handling</h3>
          <p className="text-base">
            To make errors more clear and recoveries more obvious, we released a
            simplified pattern that helped users troubleshoot their problem and
            easily recover when possible.
          </p>
          <div className="video-container relative mb-8">
            <video
              className="w-full rounded-[12px]"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              <source src="/assets/cv-errors-gray.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 className="text-md">Simple and Familiar Recipes</h3>
          <p className="text-base">
            We replaced a confusing multi-screen recipe format (with a heavy
            emphasis on video content) with a clean, vertical list, making steps
            easier to follow and content creation more efficient.
          </p>
          <div className="video-container relative mb-8">
            <video
              className="w-full rounded-[12px]"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              <source src="/assets/cv-guides-gray.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/cv-recipe-flow.jpg"
              alt="Recipe flow"
            />
          </div>
          <h2 className="text-lg">Reception and Results</h2>
          <p className="text-base">
            The redesigned Joule app was met with overwhelmingly positive
            feedback. Users praised its simplicity, clarity, and responsiveness.
            Key outcomes included:
          </p>
          <ul className="list-disc pl-8">
            <li>A smoother onboarding experience for new users.</li>
            <li>
              Reduced frustration from connectivity and performance issues.
            </li>
            <li>
              Increased confidence in using Joule’s unique features, such as
              auto-start timers and hold times.
            </li>
          </ul>
          <p className="text-base">
            Beyond immediate user benefits, the redesign positioned the app for
            future innovation, creating a scalable framework that could support
            additional features and products.
          </p>
          <p className="text-base">
            It’s worth noting that Joule went on to receive a Red Dot design
            award and was recognized by New York Time’s Wire Cutter as the best
            sous vide device.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyJoule;
