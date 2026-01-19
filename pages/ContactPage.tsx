
import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you within 24 hours.");
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="bg-newsprint py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <h1 className="text-4xl font-bold font-display tracking-tight text-ink sm:text-5xl">Let's talk.</h1>
            <p className="mt-4 text-lg text-secondary-ink">
              Ready to elevate your story? Reach out to schedule a complimentary 1:1 consultation. We'll respond within 24 hours.
            </p>
            <div className="mt-12 space-y-8 border-t border-hairline pt-12">
                <div>
                    <h2 className="text-base font-semibold text-ink uppercase tracking-wider font-display">Our Locations</h2>
                    <p className="mt-2 text-secondary-ink">Los Angeles, CA & Austin, TX</p>
                    <p className="mt-1 text-secondary-ink">(Serving clients nationwide)</p>
                </div>
                <div>
                    <h2 className="text-base font-semibold text-ink uppercase tracking-wider font-display">Email Us</h2>
                    <a href="mailto:contact@smoore.com" className="mt-2 text-accent-a hover:text-accent-b link-underline">contact@smoore.com</a>
                </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-6 bg-paper p-8 border border-hairline">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink">Name</label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" required className="block w-full bg-newsprint focus:bg-paper p-3 border border-hairline focus:ring-0 focus:border-ink transition"/>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink">Email</label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" required className="block w-full bg-newsprint focus:bg-paper p-3 border border-hairline focus:ring-0 focus:border-ink transition"/>
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-ink">Company</label>
                <div className="mt-1">
                  <input type="text" name="company" id="company" className="block w-full bg-newsprint focus:bg-paper p-3 border border-hairline focus:ring-0 focus:border-ink transition"/>
                </div>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-ink">Notes</label>
                <div className="mt-1">
                  <textarea id="notes" name="notes" rows={4} required className="block w-full bg-newsprint focus:bg-paper p-3 border border-hairline focus:ring-0 focus:border-ink transition"></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-paper bg-ink hover:bg-secondary-ink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-a transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
