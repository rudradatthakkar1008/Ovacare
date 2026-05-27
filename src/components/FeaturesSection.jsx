import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { AnimatedHeading, AnimatedSubtext } from './ui/AnimatedText';
import { useTranslation } from 'react-i18next';

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🤖',
      titleKey: 'feat_ai_title',
      descKey: 'feat_ai_desc',
      gradient: 'from-purple-500/20 to-blue-500/20',
      span: 'col-span-1 md:col-span-2',
    },
    {
      icon: '⚖️',
      titleKey: 'feat_hormone_title',
      descKey: 'feat_hormone_desc',
      gradient: 'from-pink-500/20 to-purple-500/20',
      span: 'col-span-1',
    },
    {
      icon: '📅',
      titleKey: 'feat_period_title',
      descKey: 'feat_period_desc',
      gradient: 'from-rose-500/20 to-pink-500/20',
      span: 'col-span-1',
    },
    {
      icon: '🥗',
      titleKey: 'feat_diet_title',
      descKey: 'feat_diet_desc',
      gradient: 'from-green-500/20 to-emerald-500/20',
      span: 'col-span-1',
    },
    {
      icon: '🧘‍♀️',
      titleKey: 'feat_yoga_title',
      descKey: 'feat_yoga_desc',
      gradient: 'from-indigo-500/20 to-purple-500/20',
      span: 'col-span-1',
    },
    {
      icon: '👩‍⚕️',
      titleKey: 'feat_doctor_title',
      descKey: 'feat_doctor_desc',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      span: 'col-span-1 md:col-span-2',
    },
    {
      icon: '🎮',
      titleKey: 'feat_game_title',
      descKey: 'feat_game_desc',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      span: 'col-span-1',
    },
    {
      icon: '💜',
      titleKey: 'feat_community_title',
      descKey: 'feat_community_desc',
      gradient: 'from-purple-500/20 to-fuchsia-500/20',
      span: 'col-span-1',
    },
    {
      icon: '🔬',
      titleKey: 'feat_lab_title',
      descKey: 'feat_lab_desc',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      span: 'col-span-1',
    },
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimatedHeading className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t('features_heading')}
          </AnimatedHeading>
          <AnimatedSubtext className="text-lg max-w-xl mx-auto">
            {t('features_subheading')}
          </AnimatedSubtext>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <GlassCard
              key={feature.titleKey}
              className={`${feature.span} relative overflow-hidden group`}
              delay={i * 0.06}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--text-primary)] transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-secondary)] transition-colors">
                  {t(feature.descKey)}
                </p>
              </div>

              {/* Corner glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
