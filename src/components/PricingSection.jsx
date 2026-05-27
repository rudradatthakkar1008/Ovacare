import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedSubtext } from './ui/AnimatedText';
import { useTranslation } from 'react-i18next';

export default function PricingSection() {
  const { t } = useTranslation();

  const plans = [
    {
      nameKey: 'plan_starter',
      priceKey: 'plan_starter_price',
      periodKey: 'plan_starter_period',
      popular: false,
      featureKeys: ['pf_ai_symptom', 'pf_basic_period', 'pf_hormonal_score', 'pf_community'],
      ctaKey: 'plan_starter_cta',
    },
    {
      nameKey: 'plan_basic',
      priceKey: 'plan_basic_price',
      periodKey: 'plan_basic_period',
      popular: false,
      featureKeys: ['pf_ai_guidance', 'pf_wellness', 'pf_period_cal', 'pf_gamification', 'pf_mood', 'pf_hormonal_insights'],
      ctaKey: 'plan_basic_cta',
    },
    {
      nameKey: 'plan_plus',
      priceKey: 'plan_plus_price',
      periodKey: 'plan_plus_period',
      popular: true,
      featureKeys: ['pf_doctor', 'pf_discount_consult', 'pf_ai_personal', 'pf_ai_advanced', 'pf_coupons', 'pf_priority', 'pf_lab', 'pf_hormonal_reports', 'pf_premium_wellness'],
      ctaKey: 'plan_plus_cta',
    },
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-14">
          <AnimatedHeading className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t('pricing_heading')}
          </AnimatedHeading>
          <AnimatedSubtext className="text-lg max-w-xl mx-auto">
            {t('pricing_subheading')}
          </AnimatedSubtext>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.nameKey}
              className={`relative glass-card rounded-3xl p-7 flex flex-col ${
                plan.popular
                  ? 'border-purple-500/40 neon-glow-strong md:-mt-4 md:mb-0'
                  : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: plan.popular
                  ? '0 0 40px rgba(168,85,247,0.4), 0 0 80px rgba(168,85,247,0.15)'
                  : '0 8px 30px rgba(168,85,247,0.15)',
              }}
              style={plan.popular ? { animation: 'float 6s ease-in-out infinite' } : {}}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold text-white shadow-lg shadow-purple-500/30">
                    {t('most_popular')}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-2 ${plan.popular ? 'gradient-text' : 'text-[var(--text-primary)]'}`}>
                  {t(plan.nameKey)}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.popular ? 'gradient-text' : 'text-[var(--text-primary)]'}`}>
                    {t(plan.priceKey)}
                  </span>
                  <span className="text-sm text-[var(--text-secondary)]">{t(plan.periodKey)}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.featureKeys.map((fKey) => (
                  <div key={fKey} className="flex items-start gap-3">
                    <span className={`text-sm mt-0.5 ${plan.popular ? 'text-purple-400' : 'text-green-400'}`}>✓</span>
                    <span className="text-sm text-[var(--text-secondary)]">{t(fKey)}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5'
                    : 'glass border-purple-500/20 text-[var(--text-primary)] hover:bg-purple-500/10 hover:border-purple-500/40'
                }`}
              >
                {t(plan.ctaKey)}
              </button>

              {plan.popular && (
                <>
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/30 -z-10" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-900/20 to-pink-900/10 -z-10" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
