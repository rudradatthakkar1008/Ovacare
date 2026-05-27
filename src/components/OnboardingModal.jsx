import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function OnboardingModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const steps = [
    {
      titleKey: 'onboard_q1',
      field: 'name',
      type: 'text',
      placeholderKey: 'onboard_q1_placeholder',
      icon: '👋',
    },
    {
      titleKey: 'onboard_q2',
      field: 'age',
      type: 'select',
      optionKeys: ['onboard_age_1', 'onboard_age_2', 'onboard_age_3', 'onboard_age_4', 'onboard_age_5'],
      icon: '🎂',
    },
    {
      titleKey: 'onboard_q3',
      field: 'irregularity',
      type: 'select',
      optionKeys: ['onboard_irreg_1', 'onboard_irreg_2', 'onboard_irreg_3', 'onboard_irreg_4'],
      icon: '📅',
    },
    {
      titleKey: 'onboard_q4',
      field: 'symptoms',
      type: 'multi',
      optionKeys: ['onboard_symptom_acne', 'onboard_symptom_weight', 'onboard_symptom_hair', 'onboard_symptom_fatigue', 'onboard_symptom_mood', 'onboard_symptom_periods', 'onboard_symptom_anxiety', 'onboard_symptom_bloat'],
      icon: '🩺',
    },
    {
      titleKey: 'onboard_q5',
      field: 'mood',
      type: 'select',
      optionKeys: ['onboard_mood_happy', 'onboard_mood_neutral', 'onboard_mood_anxious', 'onboard_mood_sad', 'onboard_mood_irritable'],
      icon: '💭',
    },
    {
      titleKey: 'onboard_q6',
      field: 'goals',
      type: 'multi',
      optionKeys: ['onboard_goal_weight', 'onboard_goal_periods', 'onboard_goal_skin', 'onboard_goal_stress', 'onboard_goal_fertility', 'onboard_goal_sleep', 'onboard_goal_hormonal'],
      icon: '🎯',
    },
  ];

  const handleAnswer = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiToggle = (field, value) => {
    setAnswers(prev => {
      const current = prev[field] || [];
      return {
        ...prev,
        [field]: current.includes(value) ? current.filter(v => v !== value) : [...current, value],
      };
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(c => c + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(c => c - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowSummary(false);
    onClose();
  };

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

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
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleReset}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full neon-glow max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              ✕
            </button>

            {!showSummary ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-2">
                    <span>{t('onboard_step_of', { current: currentStep + 1, total: steps.length })}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[var(--glass-bg)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-3">{step.icon}</div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{t(step.titleKey)}</h3>
                    </div>

                    {step.type === 'text' && (
                      <input
                        type="text"
                        value={answers[step.field] || ''}
                        onChange={(e) => handleAnswer(step.field, e.target.value)}
                        placeholder={t(step.placeholderKey)}
                        className="w-full glass rounded-xl px-5 py-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-purple-500/40 bg-transparent text-center text-lg"
                        autoFocus
                      />
                    )}

                    {step.type === 'select' && (
                      <div className="space-y-3">
                        {step.optionKeys.map((optKey) => (
                          <button
                            key={optKey}
                            onClick={() => handleAnswer(step.field, optKey)}
                            className={`w-full glass rounded-xl px-5 py-3.5 text-sm text-left transition-all ${
                              answers[step.field] === optKey
                                ? 'border-purple-500/50 bg-purple-500/10 text-purple-300'
                                : 'text-[var(--text-secondary)] hover:bg-[var(--glass-hover)]'
                            }`}
                          >
                            {t(optKey)}
                          </button>
                        ))}
                      </div>
                    )}

                    {step.type === 'multi' && (
                      <div className="flex flex-wrap gap-2 justify-center">
                        {step.optionKeys.map((optKey) => {
                          const selected = (answers[step.field] || []).includes(optKey);
                          return (
                            <button
                              key={optKey}
                              onClick={() => handleMultiToggle(step.field, optKey)}
                              className={`px-4 py-2.5 rounded-xl text-sm transition-all ${
                                selected
                                  ? 'bg-purple-500/20 border border-purple-500/50 text-purple-300'
                                  : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                              }`}
                            >
                              {t(optKey)}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-3 mt-8">
                  {currentStep > 0 && (
                    <button
                      onClick={handleBack}
                      className="btn-secondary flex-1 py-3 text-sm"
                    >
                      {t('onboard_back')}
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className="btn-primary flex-1 py-3 text-sm"
                  >
                    {currentStep < steps.length - 1 ? t('onboard_continue') : t('onboard_generate')}
                  </button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                    <span className="text-3xl">🧬</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{t('onboard_summary_title')}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{t('onboard_summary_subtitle')}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-purple-400 font-semibold mb-2">{t('onboard_hello', { name: answers.name || 'there' })}</div>
                    <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {t('onboard_analysis_intro', { age: answers.age ? t(answers.age) : '19-22' })}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-pink-400 font-semibold mb-2">{t('onboard_symptom_analysis')}</div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {(answers.symptoms || ['onboard_symptom_periods']).map(s => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-[10px] text-pink-300">{t(s)}</span>
                      ))}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)]">
                      {answers.irregularity === 'onboard_irreg_1' ? t('onboard_symptom_msg_sig') : t('onboard_symptom_msg_mod')}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-green-400 font-semibold mb-2">{t('onboard_wellness_plan')}</div>
                    <div className="space-y-2">
                      {(answers.goals || ['onboard_goal_hormonal']).slice(0, 3).map(g => (
                        <div key={g} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                          <span className="text-green-400">✓</span> {t(g)}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4 border-purple-500/20 neon-glow">
                    <div className="text-xs text-purple-400 font-semibold mb-2">{t('onboard_ai_rec_title')}</div>
                    <div className="text-sm text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: t('onboard_ai_rec_msg') }} />
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleReset();
                    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary w-full py-3.5 text-sm"
                >
                  {t('onboard_go_dashboard')}
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
