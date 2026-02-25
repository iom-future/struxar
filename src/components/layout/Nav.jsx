import { useState, memo } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "../../constants/content";
import logo from "../../assets/struxar_logo.png";

const Nav = memo(function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100]">
      {/* Announcement Banner */}
      <div
        className="text-center py-2 px-4 text-white text-xs md:text-base font-body"
        style={{
          background: "linear-gradient(90deg, #2563EB, #1d4ed8)",
        }}
        role="complementary"
        aria-label="Announcement"
      >
        <span>{nav.announcement} </span>
        <Link
          to="/demo"
          className="underline font-bold hover:text-blue-200 transition-colors focus:ring-2 focus:ring-white rounded px-1"
        >
          {nav.announcementLink}
        </Link>
      </div>

      {/* Nav Bar */}
      <nav
        className="bg-navy-900 border-b border-blue-600/10"
        style={{ height: "64px" }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1" aria-label="Struxar Home">
            <img 
              src={logo} 
              alt="" 
              className="h-8 w-auto object-contain" 
              aria-hidden="true"
            />
            <span
              className="font-display font-bold text-white text-sm tracking-[0.05em] group-hover:text-blue-400 transition-colors"
            >
              STRUXAR
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {nav.links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-body text-[0.875rem] lg:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-2 py-1 ${
                      isActive
                        ? "text-white underline underline-offset-4"
                        : "text-white/[0.72] hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              type="button"
              className="font-body text-[0.875rem] lg:text-base text-white px-4 py-2 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            >
              Log In
            </button>
            <Link
              to="/demo"
              className="font-body text-[0.875rem] lg:text-base bg-blue-600 text-white px-5 py-2.5 rounded-[10px] hover:bg-[#1d4ed8] transition-all"
              style={{ boxShadow: "0 0 20px rgba(37,99,235,0.25)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(37,99,235,0.35)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(37,99,235,0.25)")
              }
            >
              Request a Demo
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-[99] bg-navy-950 flex flex-col items-center justify-center gap-6 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <button
              type="button"
              className="absolute top-5 right-5 text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <ul className="flex flex-col items-center gap-6">
              {nav.links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `font-body text-xl transition-colors ${
                        isActive ? "text-white" : "text-white/60 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-6 w-64">
              <button 
                type="button"
                className="font-body text-white py-3 border border-white/20 rounded-[10px]"
              >
                Log In
              </button>
              <Link
                to="/demo"
                onClick={() => setMobileOpen(false)}
                className="font-body text-center bg-blue-600 text-white py-3 rounded-[10px]"
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Nav;
