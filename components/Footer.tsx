
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-paper/70">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-sm font-display uppercase tracking-kicker text-paper">S. Moore Integrated Communications</h3>
            <p className="mt-2 text-sm">Our edge. Your advantage.</p>
          </div>
          
          <div>
            <h3 className="text-sm font-display uppercase tracking-kicker text-paper">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Los Angeles, CA / Austin, TX</li>
              <li><a href="mailto:contact@smoore.com" className="hover:text-paper link-underline">Email</a></li>
              <li><a href="#" className="hover:text-paper link-underline">LinkedIn</a></li>
            </ul>
          </div>
          <div>
             <h3 className="text-sm font-display uppercase tracking-kicker text-paper">Navigate</h3>
             <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-paper link-underline">Services</Link></li>
                <li><Link to="/work" className="hover:text-paper link-underline">Work / News</Link></li>
                <li><Link to="/about" className="hover:text-paper link-underline">About</Link></li>
             </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-paper/20 pt-8">
          <p className="text-sm text-paper/50 text-center">&copy; {new Date().getFullYear()} S. Moore Integrated Communications. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
