
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-newsprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-base font-semibold font-display text-accent-a">About S. Moore</p>
          <h1 className="mt-2 text-4xl font-bold font-display tracking-tight text-ink sm:text-5xl">
            A modern PR partner for today's leaders.
          </h1>
        </div>
      </div>
      <div className="bg-paper border-y border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div>
                <p className="mt-6 text-xl text-secondary-ink">
                Sam Moore is an award-winning PR and media strategist with 15 years of experience elevating brands across the competitive healthcare and technology sectors.
                </p>
                <div className="mt-8 space-y-4 text-secondary-ink">
                  <p>As a former national “Media Relations Person of the Year” finalist, Sam has a proven track record of securing high-impact placements across top-tier business, trade, and broadcast media. Her strategic counsel is informed by years of in-house and agency experience, giving her a unique perspective on what it takes to build and protect a brand's reputation.</p>
                  <p>Her past work includes campaigns and strategic communications for industry giants and disruptive startups alike, including Aetna, UnitedHealthcare, Blue Shield of California, Humana, CVS, Walgreens, Hims & Hers, Doctor on Demand, Lyra Health, HealthEdge, Imprivata, Accolade, IBM Watson, Cedars-Sinai, and Rush University Medical System.</p>
                  <p>Sam is a proud graduate of Louisiana State University and operates out of Los Angeles, CA and Austin, TX, serving clients nationwide.</p>
                </div>
            </div>
            <div className="mt-12 lg:mt-0 flex items-center">
                <img 
                className="w-full h-auto object-cover grayscale" 
                src="https://picsum.photos/seed/sammoore-about/1000/1200" 
                alt="Candid shot of Sam Moore" 
                />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
