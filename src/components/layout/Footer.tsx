import { GlassWater } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-background border-t border-ui-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <GlassWater className="h-8 w-8 text-primary-accent" />
                <span className="ml-2 text-ui-text text-xl font-semibold">Cocktail Haven</span>
              </Link>
            </div>
            <p className="text-ui-text/70">
              Discover the art of craft cocktails and elevate your cocktail haven experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:col-span-1 md:text-right">
            <h3 className="text-ui-text font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[{ name: 'Recipes', path: '/recipes' }, { name: 'Learn', path: '/learn' }].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-ui-text/70 hover:text-primary-accent transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-ui-text/50">
          &copy; {currentYear} Cocktail Haven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}