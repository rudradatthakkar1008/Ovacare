import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedSubtext } from './ui/AnimatedText';
import GlassCard from './ui/GlassCard';
import { useTranslation } from 'react-i18next';

export default function GamificationSection() {
  const { t } = useTranslation();
  const [xp] = useState(2340);
  const [level] = useState(3);
  const [streak] = useState(12);
  const [coins] = useState(680);
  const nextLevelXP = 3000;
  const progress = (xp / nextLevelXP) * 100;

  const badges = [
    { icon: '🌟', nameKey: 'badge_first', descKey: 'badge_first_desc', unlocked: true },
    { icon: '🔥', nameKey: 'badge_streak', descKey: 'badge_streak_desc', unlocked: true },
    { icon: '🧘', nameKey: 'badge_yoga', descKey: 'badge_yoga_desc', unlocked: true },
    { icon: '💧', nameKey: 'badge_hydra', descKey: 'badge_hydra_desc', unlocked: true },
    { icon: '📊', nameKey: 'badge_data', descKey: 'badge_data_desc', unlocked: false },
    { icon: '🏆', nameKey: 'badge_champ', descKey: 'badge_champ_desc', unlocked: false },
    { icon: '💜', nameKey: 'badge_star', descKey: 'badge_star_desc', unlocked: false },
    { icon: '👑', nameKey: 'badge_queen', descKey: 'badge_queen_desc', unlocked: false },
  ];

  const rewards = [
    { icon: '🎫', nameKey: 'reward_consult', ptsKey: 'reward_consult_pts', unlocked: true },
    { icon: '🥗', nameKey: 'reward_diet', ptsKey: 'reward_diet_pts', unlocked: true },
    { icon: '💆', nameKey: 'reward_spa', ptsKey: 'reward_spa_pts', unlocked: false },
    { icon: '🏅', nameKey: 'reward_plus', ptsKey: 'reward_plus_pts', unlocked: false },
  ];

  const stats = [
    { labelKey: 'stat_level', value: level, icon: '⚡', color: 'from-purple-500 to-indigo-500' },
    { labelKey: 'stat_xp', value: xp.toLocaleString(), icon: '✨', color: 'from-pink-500 to-rose-500' },
    { labelKey: 'stat_streak', value: streak, icon: '🔥', color: 'from-orange-500 to-amber-500' },
    { labelKey: 'stat_coins', value: coins, icon: '🪙', color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <section id="gamification" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <AnimatedHeading className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t('gamify_heading')}
          </AnimatedHeading>
          <AnimatedSubtext className="text-lg max-w-xl mx-auto">
            {t('gamify_subheading')}
          </AnimatedSubtext>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.labelKey}
              className="glass-card p-5 rounded-2xl text-center"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-2xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* XP Progress */}
        <motion.div
          className="glass-card p-6 rounded-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30">
                {level}
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">{t('wellness_level')} {level}</div>
                <div className="text-xs text-[var(--text-secondary)]">{xp} / {nextLevelXP} {t('xp_to_next')} {level + 1}</div>
              </div>
            </div>
            <span className="text-xs text-purple-400 font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-[var(--glass-bg)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full relative"
              style={{ backgroundSize: '200% 100%' }}
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Badges */}
          <GlassCard className="!p-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2">
              <span>🏅</span> {t('badges_title')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.nameKey}
                  className={`text-center p-3 rounded-xl transition-all ${
                    badge.unlocked
                      ? 'glass hover:bg-purple-500/10'
                      : 'glass opacity-40'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: badge.unlocked ? 1 : 0.4, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={badge.unlocked ? { scale: 1.08 } : {}}
                >
                  <div className="text-3xl mb-1.5">{badge.icon}</div>
                  <div className="text-[10px] font-semibold text-[var(--text-primary)]">{t(badge.nameKey)}</div>
                  <div className="text-[9px] text-[var(--text-secondary)]">{t(badge.descKey)}</div>
                  {!badge.unlocked && (
                    <div className="text-[9px] text-[var(--text-secondary)] mt-1">{t('badge_locked')}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Rewards */}
          <GlassCard className="!p-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2">
              <span>🎁</span> {t('rewards_title')}
            </h3>
            <div className="space-y-3">
              {rewards.map((reward, i) => (
                <motion.div
                  key={reward.nameKey}
                  className={`flex items-center gap-4 glass rounded-xl p-4 transition-all ${
                    reward.unlocked ? 'hover:bg-purple-500/5' : 'opacity-50'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: reward.unlocked ? 1 : 0.5, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-2xl">{reward.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[var(--text-primary)]">{t(reward.nameKey)}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{t(reward.ptsKey)}</div>
                  </div>
                  <button
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      reward.unlocked
                        ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30'
                        : 'bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] cursor-not-allowed'
                    }`}
                    disabled={!reward.unlocked}
                  >
                    {reward.unlocked ? t('redeem') : t('locked')}
                  </button>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
