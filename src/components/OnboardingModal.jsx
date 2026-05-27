import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    title: "What's your name?",
    field: 'name',
    type: 'text',
    placeholder: 'Enter your name',
    icon: '👋',
  },
  {
    title: 'How old are you?',
    field: 'age',
    type: 'select',
    options: ['16-18', '19-22', '23-25', '26-30', '31-35'],
    icon: '🎂',
  },
  {
    title: 'Do you experience irregular cycles?',
    field: 'irregularity',
    type: 'select',
    options: ['Very irregular', 'Sometimes irregular', 'Mostly regular', 'Not sure'],
    icon: '📅',
  },
  {
    title: 'Select your symptoms',
    field: 'symptoms',
    type: 'multi',
    options: ['Acne', 'Weight Gain', 'Hair Loss', 'Fatigue', 'Mood Swings', 'Irregular Periods', 'Anxiety', 'Bloating'],
    icon: '🩺',
  },
  {
    title: 'How would you describe your mood lately?',
    field: 'mood',
    type: 'select',
    options: ['😊 Generally Happy', '😐 Neutral', '😟 Anxious', '😢 Low / Sad', '😤 Irritable'],
    icon: '💭',
  },
  {
    title: 'What are your wellness goals?',
    field: 'goals',
    type: 'multi',
    options: ['Lose Weight', 'Regulate Periods', 'Clear Skin', 'Reduce Stress', 'Improve Fertility', 'Better Sleep', 'Hormonal Balance'],
    icon: '🎯',
  },
];

export default function OnboardingModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showSummary, setShowSummary] = useState(false);

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
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleReset}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative glass-card rounded-3xl p-8 max-w-lg w-full neon-glow max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            {/* Close button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            {!showSummary ? (
              <>
                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Step {currentStep + 1} of {steps.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Step Content */}
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
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>

                    {/* Input types */}
                    {step.type === 'text' && (
                      <input
                        type="text"
                        value={answers[step.field] || ''}
                        onChange={(e) => handleAnswer(step.field, e.target.value)}
                        placeholder={step.placeholder}
                        className="w-full glass rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 bg-transparent text-center text-lg"
                        autoFocus
                      />
                    )}

                    {step.type === 'select' && (
                      <div className="space-y-3">
                        {step.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleAnswer(step.field, opt)}
                            className={`w-full glass rounded-xl px-5 py-3.5 text-sm text-left transition-all ${
                              answers[step.field] === opt
                                ? 'border-purple-500/50 bg-purple-500/10 text-purple-300'
                                : 'text-gray-300 hover:bg-white/5'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {step.type === 'multi' && (
                      <div className="flex flex-wrap gap-2 justify-center">
                        {step.options.map((opt) => {
                          const selected = (answers[step.field] || []).includes(opt);
                          return (
                            <button
                              key={opt}
                              onClick={() => handleMultiToggle(step.field, opt)}
                              className={`px-4 py-2.5 rounded-xl text-sm transition-all ${
                                selected
                                  ? 'bg-purple-500/20 border border-purple-500/50 text-purple-300'
                                  : 'glass text-gray-400 hover:text-white'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex gap-3 mt-8">
                  {currentStep > 0 && (
                    <button
                      onClick={handleBack}
                      className="btn-secondary flex-1 py-3 text-sm"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className="btn-primary flex-1 py-3 text-sm"
                  >
                    {currentStep < steps.length - 1 ? 'Continue' : 'Generate My Plan ✨'}
                  </button>
                </div>
              </>
            ) : (
              /* AI Summary */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                    <span className="text-3xl">🧬</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Your AI Health Summary</h3>
                  <p className="text-sm text-gray-400">Personalized analysis by OvaCare AI</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-purple-400 font-semibold mb-2">👋 Hello, {answers.name || 'there'}!</div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                      Based on your profile ({answers.age || '19-22'} years old), our AI has analyzed your symptoms and created a personalized wellness roadmap.
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-pink-400 font-semibold mb-2">🩺 Symptom Analysis</div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {(answers.symptoms || ['Irregular Periods']).map(s => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-[10px] text-pink-300">{s}</span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400">
                      Your symptoms suggest a {answers.irregularity === 'Very irregular' ? 'significant' : 'moderate'} hormonal imbalance pattern consistent with PMOS. Early intervention can lead to significant improvements.
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-green-400 font-semibold mb-2">🎯 Your Wellness Plan</div>
                    <div className="space-y-2">
                      {(answers.goals || ['Hormonal Balance']).slice(0, 3).map(g => (
                        <div key={g} className="flex items-center gap-2 text-xs text-gray-300">
                          <span className="text-green-400">✓</span> {g}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4 border-purple-500/20 neon-glow">
                    <div className="text-xs text-purple-400 font-semibold mb-2">⚡ AI Recommendation</div>
                    <div className="text-sm text-gray-300">
                      We recommend starting with our <span className="text-purple-300 font-semibold">OvaCare Plus</span> plan for comprehensive AI guidance, doctor consultations, and personalized wellness tracking.
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleReset();
                    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary w-full py-3.5 text-sm"
                >
                  Go to My Dashboard →
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
