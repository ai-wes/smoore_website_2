
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-newsprint py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-hairline pt-12">
          <h2 className="text-3xl font-bold font-display tracking-tight text-ink sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-secondary-ink max-w-2xl">A comprehensive suite of communication strategies.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-paper p-6 border border-hairline border-t-4 border-accent-a">
              <h3 className="text-lg font-display font-semibold leading-8 tracking-tight text-ink">{service.title}</h3>
              <p className="mt-2 text-base leading-7 text-secondary-ink">{service.description}</p>
              <p className="mt-4">
                <Link to="/services" className="text-sm font-semibold leading-6 text-accent-a hover:text-accent-b transition-colors">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
