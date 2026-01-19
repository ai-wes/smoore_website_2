
import React from 'react';
import { WORK_ITEMS } from '../constants';

const WorkPage: React.FC = () => {
  return (
    <div className="bg-newsprint py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-base font-semibold font-display text-accent-a">Our Portfolio</p>
          <h1 className="mt-2 text-4xl font-bold font-display tracking-tight text-ink sm:text-6xl">Work / News</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-ink">
            A selection of our recent placements, press releases, and thought leadership pieces.
          </p>
        </div>
        
        <div className="mt-16 border-t border-hairline pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...WORK_ITEMS, ...WORK_ITEMS, ...WORK_ITEMS].map((item, index) => (
              <a href={item.link} key={`${item.title}-${index}`} className="group block p-8 bg-paper border border-hairline hover:border-ink transition-all duration-300">
                <div className="flex justify-between items-center">
                    <p className="text-xs font-mono uppercase tracking-widest text-secondary-ink">{item.date}</p>
                    <span className="text-xs font-medium bg-accent-a/10 text-accent-a px-2 py-1 rounded-full">{item.category}</span>
                </div>
                <h3 className="mt-4 text-xl font-display font-medium text-ink">{item.title}</h3>
                <p className="mt-6 text-sm font-medium text-accent-a">
                  Full Story <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
