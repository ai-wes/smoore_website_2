
import React from 'react';

const Approach: React.FC = () => {
  return (
    <div className="bg-ink text-paper py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold font-display tracking-tight sm:text-4xl">Our Approach</h2>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-2">
            <blockquote className="relative text-2xl font-medium leading-9 sm:text-3xl">
              <span className="absolute -top-8 -left-6 text-8xl font-sans text-paper/10 -z-0">“</span>
              <p className="relative z-10">
                We cut through noise, compete with legacy players, and turn coverage into impact.
              </p>
            </blockquote>
            <div className="mt-10 border-t border-paper/20 pt-10">
              <h3 className="text-base font-semibold leading-7 font-display uppercase tracking-kicker">Operating Notes</h3>
              <ul role="list" className="mt-4 space-y-3 text-base text-gray-300">
                <li className="flex gap-x-3">
                  <span className="text-accent-a">›</span>
                  <span>Prioritize hard news</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-accent-a">›</span>
                  <span>Respond to media within 12 hours</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-accent-a">›</span>
                  <span>Designate two spokespeople</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-accent-a">›</span>
                  <span>Client is owner of approved imagery/copy accuracy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
