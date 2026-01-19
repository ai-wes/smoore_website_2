
import React from 'react';
import { Link } from 'react-router-dom';
import { WORK_ITEMS } from '../../constants';
import { ArrowIcon } from '../../constants';

const WorkHighlights: React.FC = () => {
  return (
    <div className="bg-newsprint py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-hairline pt-12">
          <h2 className="text-3xl font-bold font-display tracking-tight text-ink sm:text-4xl mb-12">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORK_ITEMS.map((item) => (
              <a href={item.link} key={item.title} className="group relative block p-8 bg-paper border border-hairline hover:border-ink transition-colors duration-300">
                <div className="absolute top-4 right-4 text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowIcon className="w-6 h-6 -rotate-45" />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-secondary-ink">{item.date}</p>
                <h3 className="mt-4 text-2xl font-display font-medium text-ink">{item.title}</h3>
                <p className="mt-6 text-sm font-medium text-accent-a">
                  Full Story <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </p>
              </a>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/work"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-paper bg-ink hover:bg-secondary-ink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-a transition-colors"
            >
              See All Work / News
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHighlights;
