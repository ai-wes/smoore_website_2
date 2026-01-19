
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-paper border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12 py-20 sm:py-24 lg:py-32">
          <div className="lg:col-span-2">
            <p className="font-mono text-sm uppercase tracking-widest text-secondary-ink">
              S. Moore Integrated Communications
            </p>
            <h1 className="mt-4 text-6xl font-display font-bold tracking-tighter text-ink sm:text-7xl xl:text-8xl" style={{ lineHeight: '1.05' }}>
              Our edge.<br/>Your advantage.
            </h1>
          </div>
          <div className="flex flex-col justify-center mt-12 lg:mt-0">
            <div className="lg:border-l lg:pl-8 border-hairline h-full flex flex-col justify-center">
              <p className="text-lg text-secondary-ink">
                The strategic partner for marquee and upstart brands across healthcare and technology. We leverage proven PR strategies with a scrappy mentality to help organizations find their voice and get heard.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/contact"
                  className="px-6 py-3 text-base font-medium text-paper bg-ink hover:bg-secondary-ink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-a transition-colors"
                >
                  Request Consultation
                </Link>
                <Link to="/work" className="group text-base font-medium leading-6 text-ink hover:text-accent-a transition-colors">
                  See Work <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
