
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-paper py-24 sm:py-32 border-y border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-16">
          <div className="lg:col-span-1">
            <img 
              className="h-full w-full object-cover grayscale" 
              src="https://picsum.photos/seed/sammoore/800/1200" 
              alt="Portrait of Sam Moore" 
            />
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center">
            <p className="text-base font-mono font-semibold uppercase tracking-widest text-accent-a">Meet Sam Moore</p>
            <h2 className="mt-2 text-3xl font-bold font-display tracking-tight text-ink sm:text-4xl">Award-winning PR and media strategist.</h2>
            <p className="mt-6 text-lg text-secondary-ink">
              With 15 years across healthcare and technology, Sam is a former national “Media Relations Person of the Year” finalist with placements across business, trade, and broadcast.
            </p>
            <p className="mt-4 text-base text-secondary-ink">
              Past highlights: Aetna, UnitedHealthcare, Blue Shield of California, Humana, CVS, Walgreens, Hims & Hers, Doctor on Demand, Lyra Health, HealthEdge, Imprivata, Accolade, IBM Watson, Cedars-Sinai, Rush University Medical System. Based in Los Angeles and Austin; LSU graduate.
            </p>
            <div className="mt-8">
              <Link to="/about" className="text-base font-semibold leading-6 text-accent-a hover:text-accent-b transition-colors">
                Read full bio <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
