import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { key: 'features', href: '#features' },
  { key: 'ai_engine', href: '#ai-engine' },
  { key: 'tracker', href: '#tracker' },
  { key: 'pricing', href: '#pricing' },
  { key: 'dashboard', href: '#dashboard' },
];

export default function Navbar({ onGetStarted }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check initial theme from document
    if (document.documentElement.classList.contains('light')) {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light');
      setTheme('dark');
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-purple-900/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="OvaCare Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group"
            >
              {t(link.key)}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Settings & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <select 
            value={i18n.language} 
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-transparent text-sm text-[var(--text-primary)] outline-none cursor-pointer p-1 rounded glass-strong"
          >
            <option value="en" className="bg-[var(--dark-bg)] text-[var(--text-primary)]">EN</option>
            <option value="hi" className="bg-[var(--dark-bg)] text-[var(--text-primary)]">HI</option>
          </select>
          <button
            onClick={onGetStarted}
            className="btn-primary text-sm py-2.5 px-6 ml-2"
          >
            {t('get_started')}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-[var(--text-primary)] block"
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass-strong border-t border-[var(--glass-border)]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={toggleTheme}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--text-primary)]"
                >
                  {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
                <select 
                  value={i18n.language} 
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className="bg-transparent text-[var(--text-primary)] outline-none cursor-pointer p-2 rounded glass-strong"
                >
                  <option value="en" className="bg-[var(--dark-bg)] text-[var(--text-primary)]">English</option>
                  <option value="hi" className="bg-[var(--dark-bg)] text-[var(--text-primary)]">हिंदी</option>
                </select>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.key)}
                </a>
              ))}
              <button
                onClick={() => { onGetStarted(); setMobileOpen(false); }}
                className="btn-primary text-sm py-3 mt-2"
              >
                {t('get_started')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
