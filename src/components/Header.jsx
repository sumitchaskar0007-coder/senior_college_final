import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [udanOpen, setUdanOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  // Close Udan dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (udanOpen && !event.target.closest('.udan-dropdown')) {
        setUdanOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [udanOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Departments", path: "/departments" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Student Corner", path: "/student-corner" },
    { name: "IQAC", path: "/iqac" },
    { name: "NAAC", path: "/naac" },
    { name: "Research", path: "/research" },
    { name: "Alumni", path: "/alumni" },
    { name: "Contact", path: "/contact" },
    { name: "MahaDBT Scholarship", path: "https://mahadbt.maharashtra.gov.in/login/login", external: true }
  ];

  const moreLinks = [
    { name: "Blogs", path: "/blogs" },
    { name: "Careers", path: "/careers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Notice", path: "/notices" },
  ];

  // Udan books data
  const udanBooks = [
    { name: "Udan 1", path: "/books/Udan-1.pdf" },
    { name: "Udan 2", path: "/books/Udan-2.pdf" },
    { name: "Udan 3", path: "/books/Udan-3.pdf" },
    { name: "Udan 4", path: "/books/Udan-4.pdf" },
    { name: "Udan 5", path: "/books/Udan-5.pdf" },
    { name: "Udan 6", path: "/books/Udan-6.pdf" },
    { name: "Udan 7", path: "/books/Udan-7.pdf" },
    { name: "Udan 8", path: "/books/Udan-8.pdf" },
    { name: "Udan 9", path: "/books/Udan-9.pdf" },
  ];

  // Function to handle Udan book click
  const handleUdanClick = (pdfPath) => {
    window.open(pdfPath, '_blank');
    setUdanOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition ${
          isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur"
        }`}
      >
        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto flex items-center px-4 py-3 gap-3">
          <Link to="/">
            <img
              src="/images/logo/jadhavar_logo.png"
              alt="College Logo"
              className="h-10 md:h-14"
            />
          </Link>

          <div className="flex-1 min-w-0">
            <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-[#0a2a66] truncate">
              Dr. Sudhakarrao Jadhavar Arts, Commerce & Science College
            </h1>
            <p className="hidden md:block text-xs text-gray-600">
              NAAC Accredited | Affiliated to Savitribai Phule Pune University
            </p>
          </div>

          {/* UDAN DROPDOWN - Right Corner */}
          <div className="hidden sm:block relative udan-dropdown">
            <button
              onClick={() => setUdanOpen(!udanOpen)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
                udanOpen 
                  ? "bg-[#0a2a66] text-white" 
                  : "bg-[#0a2a66]/10 text-[#0a2a66] hover:bg-[#0a2a66] hover:text-white"
              }`}
            >
              Udan ▾
            </button>

            <AnimatePresence>
              {udanOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 min-w-[140px] md:min-w-[160px] overflow-hidden z-50"
                >
                  <div className="py-1">
                    {udanBooks.map((book) => (
                      <button
                        key={book.name}
                        onClick={() => handleUdanClick(book.path)}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0a2a66]/10 hover:text-[#0a2a66] transition-colors duration-150 border-b border-gray-50 last:border-0"
                      >
                        {book.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-2xl text-[#0a2a66]"
          >
            ☰
          </button>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block bg-[#0a2a66]">
          <ul className="flex justify-center flex-wrap">
            {navLinks.map((link) => (
              <li key={link.path}>
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-3 block text-sm ${
                      location.pathname === link.path
                        ? "bg-[#143f8f] text-white"
                        : "text-white hover:bg-[#143f8f]"
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-3 block text-sm ${
                      location.pathname === link.path
                        ? "bg-[#143f8f] text-white"
                        : "text-white hover:bg-[#143f8f]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}

            {/* MORE */}
            <li className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="px-4 py-3 text-white hover:bg-[#143f8f]"
              >
                More ▾
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bg-white shadow-lg w-40 z-50"
                  >
                    {moreLinks.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setMoreOpen(false)}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 z-50 h-full w-[85%] bg-white p-5 overflow-y-auto"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="text-xl mb-5 text-[#0a2a66]"
              >
                ✕
              </button>

              {/* Udan Section in Mobile */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#0a2a66] mb-2 border-b pb-2">Udan Books</h3>
                <div className="grid grid-cols-3 gap-2">
                  {udanBooks.map((book) => (
                    <button
                      key={book.name}
                      onClick={() => {
                        window.open(book.path, '_blank');
                        setMobileOpen(false);
                      }}
                      className="text-sm bg-[#0a2a66]/5 hover:bg-[#0a2a66]/10 px-3 py-2 rounded text-[#0a2a66] font-medium transition-colors"
                    >
                      {book.name}
                    </button>
                  ))}
                </div>
              </div>

              {[...navLinks, ...moreLinks].map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 border-b text-[#0a2a66]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 border-b text-[#0a2a66]"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;