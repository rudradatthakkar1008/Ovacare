import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedSubtext } from './ui/AnimatedText';
import GlassCard from './ui/GlassCard';

const badges = [
  { icon: '🌟', name: 'First Steps', desc: 'Complete onboarding', unlocked: true },
  { icon: '🔥', name: '7 Day Streak', desc: '7 days consistent', unlocked: true },
  { icon: '🧘', name: 'Yoga Master', desc: '30 yoga sessions', unlocked: true },
  { icon: '💧', name: 'Hydration Hero', desc: 'Water goals × 14', unlocked: true },
  { icon: '📊', name: 'Data Driven', desc: 'Log 30 days', unlocked: false },
  { icon: '🏆', name: 'Wellness Champion', desc: 'Reach Level 10', unlocked: false },
  { icon: '💜', name: 'Community Star', desc: 'Help 50 women', unlocked: false },
  { icon: '👑', name: 'OvaCare Queen', desc: 'Complete all goals', unlocked: false },
];

const rewards = [
  { icon: '🎫', name: 'Free Consultation Coupon', points: 500, unlocked: true },
  { icon: '🥗', name: 'Premium Diet Plan', points: 750, unlocked: true },
  { icon: '💆', name: 'Spa Discount 20%', points: 1000, unlocked: false },
  { icon: '🏅', name: 'OvaCare Plus 1 Week Free', points: 2000, unlocked: false },
];

export default function GamificationSection() {
  const [xp] = useState(2340);
  const [level] = useState(3);
  const [streak] = useState(12);
  const [coins] = useState(680);
  const nextLevelXP = 3000;
  const progress = (xp / nextLevelXP) * 100;

  return (
    <section id="gamification" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <AnimatedHeading className="text-4xl sm:text-5xl font-extrabold mb-4">
            Stay Motivated
          </AnimatedHeading>
          <AnimatedSubtext className="text-lg max-w-xl mx-auto">
            Earn points, unlock badges, maintain streaks, and redeem rewards. Your wellness journey, gamified.
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
          {[
            { label: 'Level', value: level, icon: '⚡', color: 'from-purple-500 to-indigo-500' },
            { label: 'XP Points', value: xp.toLocaleString(), icon: '✨', color: 'from-pink-500 to-rose-500' },
            { label: 'Day Streak', value: streak, icon: '🔥', color: 'from-orange-500 to-amber-500' },
            { label: 'Coins', value: coins, icon: '🪙', color: 'from-yellow-500 to-orange-500' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="glass-card p-5 rounded-2xl text-center"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-2xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
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
                <div className="text-sm font-semibold text-white">Wellness Level {level}</div>
                <div className="text-xs text-gray-500">{xp} / {nextLevelXP} XP to Level {level + 1}</div>
              </div>
            </div>
            <span className="text-xs text-purple-400 font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
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
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span>🏅</span> Wellness Badges
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.name}
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
                  <div className="text-[10px] font-semibold text-white">{badge.name}</div>
                  <div className="text-[9px] text-gray-500">{badge.desc}</div>
                  {!badge.unlocked && (
                    <div className="text-[9px] text-gray-600 mt-1">🔒 Locked</div>
                  )}
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Rewards */}
          <GlassCard className="!p-6">
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span>🎁</span> Rewards & Coupons
            </h3>
            <div className="space-y-3">
              {rewards.map((reward, i) => (
                <motion.div
                  key={reward.name}
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
                    <div className="text-sm font-medium text-white">{reward.name}</div>
                    <div className="text-xs text-gray-500">{reward.points} coins</div>
                  </div>
                  <button
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      reward.unlocked
                        ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30'
                        : 'bg-white/5 border border-white/5 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!reward.unlocked}
                  >
                    {reward.unlocked ? 'Redeem' : 'Locked'}
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
