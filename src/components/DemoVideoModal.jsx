import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function DemoVideoModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const demoSlides = [
    {
      titleKey: 'demo_slide1_title',
      descKey: 'demo_slide1_desc',
      icon: '🤖',
      mockup: (
        <div className="glass rounded-2xl p-4 max-w-xs mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs text-white font-bold">AI</div>
            <div className="text-xs text-[var(--text-primary)] font-medium">{t('hero_chat_bot')}</div>
          </div>
          <div className="space-y-2">
            <div className="glass rounded-xl p-2.5 text-[10px] text-[var(--text-secondary)]">{t('hero_chat_msg2')}</div>
            <div className="flex gap-1.5">
              <span className="px-2 py-1 rounded-lg bg-purple-500/10 text-[9px] text-purple-300">{t('demo_view_plan')}</span>
              <span className="px-2 py-1 rounded-lg bg-pink-500/10 text-[9px] text-pink-300">{t('demo_ask_more')}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      titleKey: 'demo_slide2_title',
      descKey: 'demo_slide2_desc',
      icon: '📊',
      mockup: (
        <div className="glass rounded-2xl p-4 max-w-xs mx-auto text-center">
          <div className="relative w-24 h-24 mx-auto mb-3">
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" stroke="rgba(255,255,255,0.05)" strokeWidth="5" fill="none" />
              <circle cx="40" cy="40" r="35" stroke="url(#demoGrad)" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="220" strokeDashoffset="55" />
              <defs><linearGradient id="demoGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#f472b6" /></linearGradient></defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold gradient-text">78</div>
          </div>
          <div className="text-xs text-[var(--text-primary)] font-medium">{t('demo_balance_score')}</div>
          <div className="text-[10px] text-green-400 mt-1">{t('demo_improvement')}</div>
        </div>
      ),
    },
    {
      titleKey: 'demo_slide3_title',
      descKey: 'demo_slide3_desc',
      icon: '📅',
      mockup: (
        <div className="glass rounded-2xl p-4 max-w-xs mx-auto">
          <div className="text-xs text-[var(--text-primary)] font-medium mb-2">{t('month_may')} 2026</div>
          <div className="grid grid-cols-7 gap-1">
            {['S','M','T','W','T','F','S'].map((d,i) => (
              <div key={`${d}${i}`} className="text-center text-[8px] text-[var(--text-secondary)] py-0.5">{d}</div>
            ))}
            {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
              <div key={d} className={`text-center text-[9px] py-1 rounded ${
                [5,6,7,8,9].includes(d) ? 'bg-pink-500/30 text-pink-300' :
                d === 19 ? 'bg-purple-500/30 text-purple-300 ring-1 ring-purple-400/30' :
                'text-[var(--text-secondary)]'
              }`}>{d}</div>
            ))}
          </div>
        </div>
      ),
    },
    {
      titleKey: 'demo_slide4_title',
      descKey: 'demo_slide4_desc',
      icon: '👩‍⚕️',
      mockup: (
        <div className="glass rounded-2xl p-4 max-w-xs mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-lg">👩‍⚕️</div>
            <div>
              <div className="text-xs text-[var(--text-primary)] font-medium">{t('dash_doctor_name')}</div>
              <div className="text-[10px] text-[var(--text-secondary)]">{t('dash_doctor_spec')} • 12 yrs exp</div>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex-1 text-center px-2 py-1.5 rounded-lg bg-purple-500/10 text-[10px] text-purple-300">{t('demo_book_call')}</span>
            <span className="flex-1 text-center px-2 py-1.5 rounded-lg bg-green-500/10 text-[10px] text-green-300">{t('demo_chat_now')}</span>
          </div>
        </div>
      ),
    },
    {
      titleKey: 'demo_slide5_title',
      descKey: 'demo_slide5_desc',
      icon: '🏆',
      mockup: (
        <div className="glass rounded-2xl p-4 max-w-xs mx-auto text-center">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-xs text-[var(--text-primary)] font-medium mb-2">{t('demo_level_achieved')}</div>
          <div className="w-full h-2 bg-[var(--glass-bg)] rounded-full overflow-hidden mb-2">
            <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
          <div className="flex justify-center gap-3">
            <span className="text-xs text-orange-400">🔥 12 {t('stat_streak').toLowerCase()}</span>
            <span className="text-xs text-yellow-400">🪙 680 {t('stat_coins').toLowerCase()}</span>
          </div>
        </div>
      ),
    },
    {
      titleKey: 'demo_slide6_title',
      descKey: 'demo_slide6_desc',
      icon: '📱',
      mockup: (
        <div className="glass rounded-2xl p-4 max-w-xs mx-auto">
          <div className="text-xs text-[var(--text-primary)] font-medium mb-2">{t('demo_dashboard_label')}</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="glass rounded-lg p-2 text-center"><div className="text-lg">📊</div><div className="text-[9px] text-[var(--text-secondary)]">{t('dash_balance_score')}: 78</div></div>
            <div className="glass rounded-lg p-2 text-center"><div className="text-lg">📅</div><div className="text-[9px] text-[var(--text-secondary)]">{t('dash_days_period')}: 9</div></div>
            <div className="glass rounded-lg p-2 text-center"><div className="text-lg">😊</div><div className="text-[9px] text-[var(--text-secondary)]">{t('dash_mood')}</div></div>
            <div className="glass rounded-lg p-2 text-center"><div className="text-lg">💧</div><div className="text-[9px] text-[var(--text-secondary)]">{t('dash_water')}: 1.5L</div></div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (!isOpen || !isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentSlide(c => (c + 1) % demoSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen, isAutoplay, demoSlides.length]);

  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
      setIsAutoplay(true);
    }
  }, [isOpen]);

  const slide = demoSlides[currentSlide];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            className="relative glass-card rounded-3xl p-6 sm:p-8 max-w-2xl w-full neon-glow-strong"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors z-10"
            >
              ✕
            </button>

            <div className="text-center mb-2">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                {t('demo_badge')}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center py-6"
              >
                <div className="text-5xl mb-4">{slide.icon}</div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{t(slide.titleKey)}</h3>
                <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto mb-8">{t(slide.descKey)}</p>
                <div className="mb-4">{slide.mockup}</div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-2 mb-4">
              {demoSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentSlide(i); setIsAutoplay(false); }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentSlide
                      ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'w-1.5 bg-[var(--glass-border)] hover:bg-[var(--glass-hover)]'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { setCurrentSlide(c => c > 0 ? c - 1 : demoSlides.length - 1); setIsAutoplay(false); }}
                className="btn-secondary flex-1 py-2.5 text-sm"
              >
                {t('demo_prev')}
              </button>
              <button
                onClick={() => { setCurrentSlide(c => (c + 1) % demoSlides.length); setIsAutoplay(false); }}
                className="btn-primary flex-1 py-2.5 text-sm"
              >
                {t('demo_next')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
