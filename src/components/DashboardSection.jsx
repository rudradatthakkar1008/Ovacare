import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedSubtext } from './ui/AnimatedText';
import { useTranslation } from 'react-i18next';

export default function DashboardSection() {
  const { t } = useTranslation();

  const tasks = [
    { nameKey: 'dash_task_yoga', timeKey: 'dash_task_yoga_time', done: true, icon: '🧘' },
    { nameKey: 'dash_task_suppl', timeKey: 'dash_task_suppl_time', done: true, icon: '💊' },
    { nameKey: 'dash_task_breakfast', timeKey: 'dash_task_breakfast_time', done: true, icon: '🥗' },
    { nameKey: 'dash_task_water', timeKey: 'dash_task_water_time', done: false, icon: '💧', progress: 60 },
    { nameKey: 'dash_task_walk', timeKey: 'dash_task_walk_time', done: false, icon: '🚶‍♀️' },
    { nameKey: 'dash_task_mood', timeKey: 'dash_task_mood_time', done: false, icon: '😊' },
  ];

  const moodData = [
    { dayKey: 'day_mon', mood: 4, emoji: '😊' },
    { dayKey: 'day_tue', mood: 3, emoji: '😐' },
    { dayKey: 'day_wed', mood: 5, emoji: '🥰' },
    { dayKey: 'day_thu', mood: 2, emoji: '😟' },
    { dayKey: 'day_fri', mood: 4, emoji: '😊' },
    { dayKey: 'day_sat', mood: 5, emoji: '🥰' },
    { dayKey: 'day_sun', mood: 4, emoji: '😊' },
  ];

  const recs = [
    { textKey: 'dash_rec1', tagKey: 'dash_rec1_tag', color: 'text-green-400 bg-green-500/10' },
    { textKey: 'dash_rec2', tagKey: 'dash_rec2_tag', color: 'text-purple-400 bg-purple-500/10' },
    { textKey: 'dash_rec3', tagKey: 'dash_rec3_tag', color: 'text-pink-400 bg-pink-500/10' },
  ];

  return (
    <section id="dashboard" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm">📊</span>
            <span className="text-sm text-purple-300">{t('dash_badge')}</span>
          </motion.div>
          <AnimatedHeading className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t('dash_heading')}
          </AnimatedHeading>
          <AnimatedSubtext className="text-lg max-w-xl mx-auto">
            {t('dash_subheading')}
          </AnimatedSubtext>
        </div>

        <motion.div
          className="glass-card rounded-3xl p-4 sm:p-6 md:p-8 neon-glow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-[var(--glass-border)] gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-sm font-bold text-white">P</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">{t('dash_greeting')}</div>
                <div className="text-xs text-[var(--text-secondary)]">{t('dash_cycle_phase')}</div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="glass px-3 py-1.5 rounded-lg text-xs text-[var(--text-secondary)]">{t('dash_reminders_count')}</span>
              <span className="glass px-3 py-1.5 rounded-lg text-xs text-purple-400">{t('dash_level_badge')}</span>
            </div>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              className="glass rounded-2xl p-4 sm:p-5 text-center col-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="35" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="none" />
                  <motion.circle
                    cx="40" cy="40" r="35"
                    stroke="url(#scoreGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={220}
                    initial={{ strokeDashoffset: 220 }}
                    whileInView={{ strokeDashoffset: 220 * (1 - 0.78) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-extrabold gradient-text">78</span>
                </div>
              </div>
              <div className="text-xs font-semibold text-[var(--text-primary)]">{t('dash_balance_score')}</div>
              <div className="text-[10px] text-green-400 mt-1">{t('dash_balance_up')}</div>
            </motion.div>

            <div className="glass rounded-2xl p-4 sm:p-5 text-center">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-2xl font-extrabold text-pink-400">9</div>
              <div className="text-xs text-[var(--text-secondary)]">{t('dash_days_period')}</div>
              <div className="text-[10px] text-[var(--text-secondary)] mt-1">{t('dash_period_date')}</div>
            </div>

            <div className="glass rounded-2xl p-4 sm:p-5 text-center">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-extrabold text-orange-400">12</div>
              <div className="text-xs text-[var(--text-secondary)]">{t('dash_streak')}</div>
              <div className="text-[10px] text-green-400 mt-1">{t('dash_streak_best')}</div>
            </div>

            <div className="glass rounded-2xl p-4 sm:p-5 text-center">
              <div className="text-3xl mb-2">🪙</div>
              <div className="text-2xl font-extrabold text-yellow-400">680</div>
              <div className="text-xs text-[var(--text-secondary)]">{t('dash_coins')}</div>
              <div className="text-[10px] text-purple-400 mt-1">{t('dash_coins_today')}</div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* AI Recommendations */}
            <div className="glass rounded-2xl p-5 md:col-span-2">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="text-purple-400">🤖</span> {t('dash_ai_recs')}
              </h4>
              <div className="space-y-3">
                {recs.map((rec, i) => (
                  <motion.div
                    key={rec.textKey}
                    className="glass rounded-xl p-3.5 flex items-start gap-3 hover:bg-purple-500/5 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${rec.color} mt-0.5 whitespace-nowrap`}>{t(rec.tagKey)}</span>
                    <span className="text-xs text-[var(--text-secondary)] leading-relaxed">{t(rec.textKey)}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Water Intake */}
            <div className="glass rounded-2xl p-5">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span>💧</span> {t('dash_water')}
              </h4>
              <div className="flex justify-center mb-3">
                <div className="relative w-16 h-24 rounded-xl border-2 border-blue-400/30 overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500/40 to-blue-400/20"
                    initial={{ height: 0 }}
                    whileInView={{ height: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-300">1.5L</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-[var(--text-secondary)]">{t('dash_water_goal')}</div>
                <div className="text-[10px] text-blue-400 mt-1">{t('dash_water_pct')}</div>
              </div>
            </div>

            {/* Mood Tracker */}
            <div className="glass rounded-2xl p-5 md:col-span-2">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span>😊</span> {t('dash_mood')}
              </h4>
              <div className="flex items-end justify-between gap-2 h-24">
                {moodData.map((d, i) => (
                  <div key={d.dayKey} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-sm">{d.emoji}</span>
                    <motion.div
                      className="w-full rounded-t-lg bg-gradient-to-t from-purple-500/40 to-pink-500/20"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${d.mood * 16}px` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                    />
                    <span className="text-[10px] text-[var(--text-secondary)]">{t(d.dayKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Consultation */}
            <div className="glass rounded-2xl p-5">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span>👩‍⚕️</span> {t('dash_consult')}
              </h4>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/20 flex items-center justify-center mx-auto mb-3 text-2xl">
                  👩‍⚕️
                </div>
                <div className="text-sm font-medium text-[var(--text-primary)]">{t('dash_doctor_name')}</div>
                <div className="text-xs text-[var(--text-secondary)]">{t('dash_doctor_spec')}</div>
                <div className="mt-2 glass px-3 py-1.5 rounded-lg text-xs text-purple-300 inline-block">
                  {t('dash_doctor_date')}
                </div>
              </div>
            </div>
          </div>

          {/* Daily Tasks */}
          <div className="mt-6 glass rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <span>✅</span> {t('dash_tasks')}
              <span className="ml-auto text-xs text-[var(--text-secondary)]">{t('dash_tasks_done')}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {tasks.map((task, i) => (
                <motion.div
                  key={task.nameKey}
                  className={`flex items-center gap-3 glass rounded-xl px-3.5 py-3 transition-all ${
                    task.done ? 'opacity-60' : 'hover:bg-purple-500/5'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: task.done ? 0.6 : 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-lg">{task.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-medium ${task.done ? 'line-through text-[var(--text-secondary)]' : 'text-[var(--text-primary)]'}`}>
                      {t(task.nameKey)}
                    </div>
                    <div className="text-[10px] text-[var(--text-secondary)]">{t(task.timeKey)}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    task.done ? 'bg-green-500/20 border-green-500/40' : 'border-[var(--glass-border)]'
                  }`}>
                    {task.done && <span className="text-[8px] text-green-400">✓</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
