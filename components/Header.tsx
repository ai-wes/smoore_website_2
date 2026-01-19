
import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Work / News', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-newsprint/80 backdrop-blur-sm z-50 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="font-display font-bold text-lg text-ink hover:text-accent-a transition-colors">
              S. Moore
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-ink' : 'text-secondary-ink hover:text-ink'
                  }`
                }
              >
                <span className="link-underline">{link.name}</span>
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-ink bg-transparent border border-ink hover:bg-ink hover:text-paper focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-a transition-colors"
            >
              Request Consultation
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
