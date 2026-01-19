
import React from 'react';
import { Link } from 'react-router-dom';

const CtaBand: React.FC = () => {
  return (
    <div className="bg-newsprint">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight text-ink sm:text-4xl">
            Ready to elevate your story?
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-paper bg-ink hover:bg-secondary-ink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-a transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBand;
