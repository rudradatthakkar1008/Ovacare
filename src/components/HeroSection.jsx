import { motion } from 'framer-motion';
import Scene3D from './3d/Scene3D';
import GlowButton from './ui/GlowButton';
import { useTranslation } from 'react-i18next';

export default function HeroSection({ onGetStarted, onWatchDemo }) {
  const { t } = useTranslation();

  const featurePills = [
    t('hero_feat_1'), t('hero_feat_2'), t('hero_feat_3'),
    t('hero_feat_4'), t('hero_feat_5'), t('hero_feat_6')
  ];

  const streakCards = [
    { emoji: '🔥', text: t('hero_streak_1') },
    { emoji: '🌸', text: t('hero_streak_2') },
    { emoji: '🏆', text: t('hero_streak_3') },
  ];
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 mesh-gradient opacity-80" />
      
      {/* Additional glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-morph" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-[100px] animate-morph" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] animate-morph" style={{ animationDelay: '5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">{t('hero_badge')}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="block text-[var(--text-primary)]">{t('hero_title_1')}</span>
          <span className="block gradient-text">{t('hero_title_2')}</span>
          <span className="block text-[var(--text-primary)]">{t('hero_title_3')}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('hero_subheadline')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <GlowButton onClick={onGetStarted} className="min-w-[180px]">
            {t('hero_get_started')}
          </GlowButton>
          <GlowButton variant="secondary" onClick={onWatchDemo} className="min-w-[180px]">
            {t('hero_watch_demo')}
          </GlowButton>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-sm text-[var(--text-secondary)] mb-10 tracking-wide uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {t('hero_tagline')}
        </motion.p>

        {/* Floating Feature Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {featurePills.map((pill) => (
            <motion.span
              key={pill}
              className="px-4 py-2 rounded-full glass text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-all cursor-default animate-float"
              style={{ animationDelay: `${Math.random() * 3}s` }}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>

        {/* Floating Streak Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } }
          }}
        >
          {streakCards.map((card, i) => (
            <motion.div
              key={card.text}
              className="glass-card px-5 py-3 flex items-center gap-3 animate-float"
              style={{ animationDelay: `${i * 1.5}s` }}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.2)' }}
            >
              <span className="text-2xl">{card.emoji}</span>
              <span className="text-sm font-medium text-gray-300">{card.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating 3D App Mockup */}
        <motion.div
          className="mt-16 relative mx-auto max-w-md"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="relative glass-card p-1 rounded-3xl neon-glow animate-float-slow overflow-hidden">
            {/* Mock app screen */}
            <div className="bg-gradient-to-br from-[#0f0f1e] to-[#1a1030] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="OvaCare Logo" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-white">{t('hero_chat_bot')}</div>
                  <div className="text-xs text-green-400">● Online</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="glass rounded-2xl p-3 text-xs text-gray-300 max-w-[80%]">
                  {t('hero_chat_msg1')}
                </div>
                <div className="glass rounded-2xl p-3 text-xs text-purple-300 ml-auto max-w-[70%] bg-purple-500/10 border-purple-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-purple-400">{t('hero_chat_insight_title')}</span>
                  </div>
                  {t('hero_chat_msg2')}
                </div>
                <div className="flex gap-2">
                  <div className="glass rounded-xl px-3 py-2 text-xs text-gray-400 flex items-center gap-1">
                    <span>🧘‍♀️</span> {t('hero_chat_pill1')}
                  </div>
                  <div className="glass rounded-xl px-3 py-2 text-xs text-gray-400 flex items-center gap-1">
                    <span>💊</span> {t('hero_chat_pill2')}
                  </div>
                  <div className="glass rounded-xl px-3 py-2 text-xs text-gray-400 flex items-center gap-1">
                    <span>🥗</span> {t('hero_chat_pill3')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow behind mockup */}
          <div className="absolute -inset-10 bg-purple-600/10 rounded-full blur-[60px] -z-10" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        </div>
      </motion.div>
    </section>
  );
}
