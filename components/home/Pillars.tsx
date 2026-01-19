
import React from 'react';
import { PILLARS } from '../../constants';

const Pillars: React.FC = () => {
  return (
    <div className="bg-newsprint py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-t border-hairline pt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PILLARS.map((pillar) => (
            <div key={pillar.title}>
              <h3 className="text-base font-semibold leading-7 font-display text-ink border-t-2 border-ink pt-4">{pillar.title}</h3>
              <p className="mt-2 text-sm text-secondary-ink">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pillars;
