import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MouseGlow from './components/ui/MouseGlow';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AIEngineSection from './components/AIEngineSection';
import PeriodTrackerSection from './components/PeriodTrackerSection';
import GamificationSection from './components/GamificationSection';
import PricingSection from './components/PricingSection';
import DashboardSection from './components/DashboardSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import OnboardingModal from './components/OnboardingModal';
import DemoVideoModal from './components/DemoVideoModal';
import { useTranslation } from 'react-i18next';

function LoadingScreen({ onComplete }) {
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mb-6 flex justify-center"
        >
          <img src="/logo.png" alt="OvaCare Logo" className="h-24 w-auto drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
        </motion.div>
        
        <motion.p
          className="text-sm text-gray-500 mt-3 font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t('ai_powered_health')}
        </motion.p>
        <motion.div
          className="mt-8 w-48 h-1 bg-white/5 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MouseGlow />
          <Navbar onGetStarted={() => setShowOnboarding(true)} />
          
          <main>
            <HeroSection
              onGetStarted={() => setShowOnboarding(true)}
              onWatchDemo={() => setShowDemo(true)}
            />
            <FeaturesSection />
            <AIEngineSection />
            <PeriodTrackerSection />
            <GamificationSection />
            <PricingSection />
            <DashboardSection />
            <FinalCTASection />
          </main>

          <Footer />

          {/* Modals */}
          <OnboardingModal
            isOpen={showOnboarding}
            onClose={() => setShowOnboarding(false)}
          />
          <DemoVideoModal
            isOpen={showDemo}
            onClose={() => setShowDemo(false)}
          />
        </motion.div>
      )}
    </>
  );
}
