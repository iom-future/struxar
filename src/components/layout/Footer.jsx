import { memo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { footer } from "../../constants/content";
import logo from "../../assets/struxar_logo.png";

const Footer = memo(function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-blue-600/20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group" aria-label="Struxar Home">
              <img 
                src={logo} 
                alt="" 
                className="h-7 w-auto object-contain" 
                aria-hidden="true"
              />
              <span
                className="font-display font-bold text-white text-sm tracking-[0.05em] group-hover:text-blue-400 transition-colors"
              >
                STRUXAR
              </span>
            </Link>
            <p className="font-body font-light text-white/60 text-sm max-w-md leading-relaxed mb-6">
              {footer.tagline}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a href="#" className="text-white/40 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a href="#" className="text-white/40 hover:text-blue-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display font-bold text-white text-sm mb-4 tracking-wide md:text-lg">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-body text-white/50 text-sm hover:text-white transition-colors md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact details */}
        <div className="border-t border-white/10 pt-8 mb-8" aria-label="Contact Information">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="font-body text-white/30 text-xs uppercase tracking-wider mb-1">General Inquiries</p>
              <a href={`mailto:${footer.contact.email}`} className="font-body text-white/70 text-sm hover:text-blue-400 transition-colors">
                {footer.contact.email}
              </a>
            </div>
            <div>
              <p className="font-body text-white/30 text-xs uppercase tracking-wider mb-1">Investor Relations</p>
              <a href={`mailto:${footer.contact.investors}`} className="font-body text-white/70 text-sm hover:text-blue-400 transition-colors">
                {footer.contact.investors}
              </a>
            </div>
            <div>
              <p className="font-body text-white/30 text-xs uppercase tracking-wider mb-1">Phone</p>
              <p className="font-body text-white/70 text-sm">{footer.contact.phone}</p>
            </div>
            <div>
              <p className="font-body text-white/30 text-xs uppercase tracking-wider mb-1">Headquarters</p>
              <p className="font-body text-white/70 text-sm">{footer.contact.hq}</p>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">{footer.legal}</p>
          <ul className="flex items-center gap-4">
            {footer.legalLinks.map((link, i) => (
              <li key={link} className="flex items-center">
                <a href="#" className="font-body text-white/30 text-xs hover:text-white/60 transition-colors">
                  {link}
                </a>
                {i < footer.legalLinks.length - 1 && (
                  <span className="text-white/20 ml-4" aria-hidden="true">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
