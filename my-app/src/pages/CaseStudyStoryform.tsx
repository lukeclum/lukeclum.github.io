import React from "react";

function CaseStudyStoryform() {
  return (
    <div className="relative py-20 w-full">
      <div className="w-full md:w-[300px] px-10 fixed top-20 left-0">
        <p className="text-base">
          Luke Clum
          <br />
          Storyform, 2014
        </p>
      </div>
      <div>
        <div className="text-wrapper">
          <h1 className="text-2xl">
            Storyform: Building automated publishing tools
          </h1>
          <h2 className="text-lg">Overview</h2>
          <p className="text-base">
            In spring of 2014, I co-founded Storyform to help small publishers
            create impactful and immersive reading experiences for their
            readers.
          </p>
        </div>
        <div className="video-container relative w-full max-w-[1600px] mx-auto mb-10 px-10">
          <video
            className="w-full rounded-[12px]"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/assets/storyform-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-wrapper">
          <p className="text-base">
            A little over a year earlier the New York Times had released
            “Snowfall,” an interactive, longform article that told the story of
            a growing number of avalanche deaths amongst professional skiers.
            The piece became an immediate sensation for its unique and
            captivating mix of multimedia and text, some calling it a
            “breakpoint in online journalism.”
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/storyform-snowfall.png"
              alt="New York Times Snowfall"
            />
          </div>
          <p className="text-base">
            Snowfall’s success ushered in a new wave of online journalism with
            publishers searching for similar ways to produce longform, immersive
            reading experiences. However, at that time publishing tools were not
            yet conducive for creating these sorts of experiences. In fact, it
            had taken a team of 11 NYT staffers over 6 months to create
            “Snowfall” from scratch. My co-founder and I saw an opportunity to
            build better tools for small publishers.
          </p>
          <h2 className="text-lg">Problems in publishing</h2>
          <p className="text-base">
            Small publishers often found themselves stuck between a rock and
            hard place when it came to monetizing their content. On one hand,
            they were continually vying for engagement from their readers by
            creating captivating material. However, they were always balancing
            the expense of creating this material against their tight
            advertising revenue and inflexible publishing platforms. Budgets
            were small, teams were sparse, and yet expectations from readers
            continued to grow. To add on top of that, publishers often had very
            little data around what pieces were providing the greatest revenue
            for them -- with advertising impressions continuing to decay across
            the board.
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/storyform-devices.jpg"
              alt="Storyform"
            />
          </div>
          <h2 className="text-lg">The Creation of Storyform</h2>
          <p className="text-base">
            At the founding of Storyform, most publishers built their sites on
            WordPress and were limited by whatever bespoke templates their
            technical teams could scrape together. Therefore, my co-founder and
            I decided to create a set of automated publishing tools that would
            integrate into a publisher’s site, allow editors to create
            captivating multimedia experiences, require zero technical
            expertise, drive substantially higher engagement, and also provide
            more detailed analytics around ad impressions.
          </p>
          <div className="relative pb-[56.25%] h-0 rounded-[12px] overflow-hidden mb-10">
            <iframe
              src="https://player.vimeo.com/video/117857002?h=bc0b9ec504&title=0&byline=0&portrait=0"
              title="Vimeo video player"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-lg">Automation</h2>
          <p className="text-base">
            At the heart of Storyform was our matching algorithm. One of our
            core design principles was to be a truly content first, responsive
            publishing platform that could handle whatever material a team of
            creators could throw at it on whatever device it was rendered. The
            second goal of Storyform was to provide a top shelf reading
            experience that leveraged the benefits of print and magazine layouts
            within a digital form.
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/storyform-system.png"
              alt="Storyform system"
            />
          </div>
          <p className="text-base">
            Therefore we created a huge series of layout templates that could
            render different amounts of text, imagery, video, and other
            publishing elements like drop quotes and pull quotes. Our algorithm
            would analyze the writer’s content and match it to whatever
            templates fit best for the reader’s screen size. This essentially
            allowed editors to create and edit their content with their current
            publishing tools and let our system automatically render their
            stories in an interactive, paginated experience without any
            additional work.
          </p>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/storyform-templates.png"
              alt="Storyform templates"
            />
          </div>
          <h2 className="text-lg">Better Advertising</h2>
          <p className="text-base">
            The big promise of Storyform was that it would help drive much
            higher engagement for publishers, both with readership and with ads.
            Current advertising and engagements stats were abysmal:
          </p>
          <ul className="list-disc pl-8">
            <li>Online Attention Span: 8 seconds</li>
            <li>Standard Ad Visibility: 50%</li>
            <li>Brand Recall from Display Ads: 8%</li>
            <li>Standard Ad Engagement: &lt;1 second</li>
          </ul>
          <p className="text-base">
            With Storyform we found that users were reading up to 2x as much
            content and spending upwards of 5x longer on ads. This promise of
            higher engagement as well as more robust analytics around ad
            visibility and engagement made Storyform a promising idea for many
            small publishers.
          </p>
          <ul className="list-disc pl-8">
            <li>Storyform Article Engagement: {">"}2 minutes</li>
            <li>Storyform Ad Visibility: 75%</li>
            <li>Storyform Percentage Read: 67%</li>
            <li>Storyform Ad Engagement: {">"}5 seconds</li>
          </ul>
          <div className="relative mb-8">
            <img
              className="w-full rounded-[12px]"
              src="/assets/storyform-ads.png"
              alt="Storyform ads"
            />
          </div>
          <h2 className="text-lg">So… What Happened?</h2>
          <p className="text-base">
            After a year, Storyform had over 4000 active publishers, had
            received international press, and had even placed in an
            international journalism contest. Yet, we couldn’t keep the doors
            open.
          </p>
          <p className="text-base">
            Ultimately, we failed at one of the basic rules in starting a
            business–follow the money. While we knew that publishers had tight
            budgets, we didn’t realize exactly how tight and struggled to
            repeatedly upsell our clients. While Storyform had a “cool” factor
            to it, publishers had bigger fish to fry. Next, we found that trying
            to introduce new ad formats into our products was an uphill battle.
            There were too many competitors in the space and many companies
            weren’t willing to experiment with new ad formats. Without a host of
            ad tools and a library of ad real estate we were dead in the water.
          </p>
          <h2 className="text-lg">Learnings</h2>
          <p className="text-base">
            Know what problems you’re solving and know them intimately. It’s so
            easy in product development to get hung up on a specific product
            vision, to push your biases onto your customers, or even get
            sidetracked by specific customer input. In design we talk a lot
            about customer empathy, but you can’t be empathetic to your
            customers if you haven’t taken the time to not only understand their
            pain points, but to grasp their severity and their place in the
            larger context of the user. Otherwise, you’ll find you’re creating
            beautiful solutions for minor nuisances.
          </p>
          <p className="text-base">Also, follow the money.</p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyStoryform;
