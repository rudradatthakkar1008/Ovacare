import { motion } from 'framer-motion';
import GlowButton from './ui/GlowButton';
import { useTranslation } from 'react-i18next';

export default function FinalCTASection() {
  const { t } = useTranslation();

  const stats = [
    { valueKey: 'cta_waitlist_val', labelKey: 'cta_waitlist_label' },
    { valueKey: 'cta_rating_val', labelKey: 'cta_rating_label' },
    { valueKey: 'cta_improvement_val', labelKey: 'cta_improvement_label' },
  ];

  const trustBadges = ['cta_trust_hipaa', 'cta_trust_india', 'cta_trust_doctor', 'cta_trust_secure'];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[200px]" />
      <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-pink-600/10 rounded-full blur-[100px] animate-morph" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-600/8 rounded-full blur-[80px] animate-morph" style={{ animationDelay: '4s' }} />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/30 animate-float">
            <span className="text-4xl">💜</span>
          </div>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {t('cta_heading_1')}{' '}
          <span className="gradient-text">{t('cta_heading_highlight')}</span>{' '}
          {t('cta_heading_2')}
        </motion.h2>

        <motion.p
          className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t('cta_subtext')}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.labelKey}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-3xl font-extrabold gradient-text">{t(stat.valueKey)}</div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GlowButton className="min-w-[200px]">
            {t('cta_join')}
          </GlowButton>
          <GlowButton variant="secondary" className="min-w-[200px]">
            {t('cta_download')}
          </GlowButton>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {trustBadges.map(badge => (
            <span key={badge} className="glass px-4 py-2 rounded-full text-xs text-[var(--text-secondary)]">
              {t(badge)}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
