
import React from 'react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-newsprint py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-base font-semibold font-display text-accent-a">What We Do</p>
          <h1 className="mt-2 text-4xl font-bold font-display tracking-tight text-ink sm:text-6xl">Our Services</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-ink">
            We provide a full spectrum of integrated communications services designed to build reputations and drive results.
          </p>
        </div>
        
        <div className="mt-20 border-t border-hairline pt-16">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="relative p-8 bg-paper border border-hairline border-t-4 border-accent-a">
                <dt>
                  <p className="text-lg leading-6 font-display font-medium text-ink">{service.title}</p>
                </dt>
                <dd className="mt-2 text-base text-secondary-ink">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
