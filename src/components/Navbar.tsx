import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-3xl font-bold text-green-400 hover:text-green-300 transition-colors"
          style={{ fontFamily: "'Sakat', 'Rubik Doodle Shadow', cursive" }}
        >
          Tatico
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quem-sou">Quem Sou</NavLink>
          <NavLink to="/fotos">Fotos</NavLink>
          <NavLink to="/videos">Vídeos</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          
          <div className="flex space-x-4 ml-4">
            <SocialIcon href="https://instagram.com" icon={<FaInstagram />} color="hover:text-pink-500" />
            <SocialIcon href="https://youtube.com" icon={<FaYoutube />} color="hover:text-red-500" />
          </div>
        </div>

        {/* Menu Mobile */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu mobile"
        >
          ☰
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg"
            >
              <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
                <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                <MobileNavLink to="/quem-sou" onClick={() => setIsOpen(false)}>Quem Sou</MobileNavLink>
                <MobileNavLink to="/fotos" onClick={() => setIsOpen(false)}>Fotos</MobileNavLink>
                <MobileNavLink to="/videos" onClick={() => setIsOpen(false)}>Vídeos</MobileNavLink>
                <MobileNavLink to="/contato" onClick={() => setIsOpen(false)}>Contato</MobileNavLink>
                
                <div className="flex justify-center space-x-6 py-4">
                  <SocialIcon href="https://instagram.com" icon={<FaInstagram size={24} />} color="hover:text-pink-500" />
                  <SocialIcon href="https://youtube.com" icon={<FaYoutube size={24} />} color="hover:text-red-500" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="hover:text-green-400 transition-colors py-2 px-1 text-sm uppercase tracking-wider"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="hover:text-green-400 transition-colors py-2 px-1 text-lg uppercase tracking-wider border-b border-gray-800"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, icon, color }: { href: string; icon: React.ReactNode; color: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`text-white ${color} transition-colors`}
    aria-label={href.includes('instagram') ? "Instagram" : "YouTube"}
  >
    {icon}
  </a>
);