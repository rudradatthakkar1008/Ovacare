import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedHeading, AnimatedSubtext } from './ui/AnimatedText';
import { useTranslation } from 'react-i18next';

export default function AIEngineSection() {
  const { t } = useTranslation();
  const [selectedQueryKey, setSelectedQueryKey] = useState('');
  const [query, setQuery] = useState('');
  const [activeResponse, setActiveResponse] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const chatRef = useRef(null);

  const presetQueries = [
    { key: 'ai_q1', icon: '📅' },
    { key: 'ai_q2', icon: '🔴' },
    { key: 'ai_q3', icon: '⚖️' },
    { key: 'ai_q4', icon: '😟' },
    { key: 'ai_q5', icon: '💇‍♀️' },
  ];

  const responseMap = {
    'ai_q1': {
      responseKey: 'ai_r1',
      insights: [
        { labelKey: 'ai_insight_cause', valueKey: 'ai_insight_cause_v', icon: '🔬' },
        { labelKey: 'ai_insight_stress', valueKey: 'ai_insight_stress_v', icon: '🧠' },
        { labelKey: 'ai_insight_rec', valueKey: 'ai_insight_rec_v', icon: '🌡️' },
      ],
      actionKeys: ['ai_action_doctor', 'ai_action_stress', 'ai_action_log'],
    },
    'ai_q2': {
      responseKey: 'ai_r2',
      insights: [
        { labelKey: 'ai_insight_root', valueKey: 'ai_insight_root_v', icon: '🔬' },
        { labelKey: 'ai_insight_cycle', valueKey: 'ai_insight_cycle_v', icon: '📊' },
        { labelKey: 'ai_insight_rec', valueKey: 'ai_insight_rec2_v', icon: '🥗' },
      ],
      actionKeys: ['ai_action_diet', 'ai_action_skin', 'ai_action_derm'],
    },
    'ai_q3': {
      responseKey: 'ai_r3',
      insights: [
        { labelKey: 'ai_insight_key', valueKey: 'ai_insight_key_v', icon: '📈' },
        { labelKey: 'ai_insight_meta', valueKey: 'ai_insight_meta_v', icon: '🔥' },
        { labelKey: 'ai_insight_sol', valueKey: 'ai_insight_sol_v', icon: '🏃‍♀️' },
      ],
      actionKeys: ['ai_action_wellness', 'ai_action_meals', 'ai_action_community'],
    },
    'ai_q4': {
      responseKey: 'ai_r4',
      insights: [
        { labelKey: 'ai_insight_conn', valueKey: 'ai_insight_conn_v', icon: '🧠' },
        { labelKey: 'ai_insight_impact', valueKey: 'ai_insight_impact_v', icon: '📊' },
        { labelKey: 'ai_insight_rec', valueKey: 'ai_insight_rec3_v', icon: '🧘' },
      ],
      actionKeys: ['ai_action_meditate', 'ai_action_mood', 'ai_action_counselor'],
    },
    'ai_q5': {
      responseKey: 'ai_r5',
      insights: [
        { labelKey: 'ai_insight_cause2', valueKey: 'ai_insight_cause2_v', icon: '🔬' },
        { labelKey: 'ai_insight_nutrients', valueKey: 'ai_insight_nutrients_v', icon: '💊' },
        { labelKey: 'ai_insight_plan', valueKey: 'ai_insight_plan_v', icon: '🥗' },
      ],
      actionKeys: ['ai_action_lab', 'ai_action_diet2', 'ai_action_tricho'],
    },
  };

  const handleQuery = (qKey) => {
    const key = qKey || selectedQueryKey || 'ai_q1';
    setSelectedQueryKey(key);
    setQuery(t(key));
    setIsTyping(true);
    setDisplayedText('');
    setActiveResponse(null);

    const data = responseMap[key] || responseMap['ai_q1'];
    const text = t(data.responseKey);
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setActiveResponse(data);
      }
    }, 20);
  };

  return (
    <section id="ai-engine" className="section-padding relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-pink-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="15%" x2="35%" y2="45%" stroke="#a855f7" strokeWidth="0.5" />
          <line x1="35%" y1="45%" x2="70%" y2="25%" stroke="#f472b6" strokeWidth="0.5" />
          <line x1="70%" y1="25%" x2="90%" y2="60%" stroke="#818cf8" strokeWidth="0.5" />
          <line x1="20%" y1="70%" x2="55%" y2="85%" stroke="#a855f7" strokeWidth="0.5" />
          <line x1="55%" y1="85%" x2="80%" y2="55%" stroke="#f472b6" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm">🧠</span>
            <span className="text-sm text-purple-300">{t('ai_badge')}</span>
          </motion.div>
          <AnimatedHeading className="text-4xl sm:text-5xl font-extrabold mb-4">
            {t('ai_heading')}
          </AnimatedHeading>
          <AnimatedSubtext className="text-lg max-w-xl mx-auto">
            {t('ai_subheading')}
          </AnimatedSubtext>
        </div>

        {/* AI Chat Interface */}
        <motion.div
          className="glass-card p-6 sm:p-8 rounded-3xl neon-glow max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Chat header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--glass-border)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)]">{t('ai_assistant_name')}</div>
              <div className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                {t('ai_ready')}
              </div>
            </div>
            <div className="ml-auto flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="text-xs text-purple-300">{t('ai_holographic')}</span>
            </div>
          </div>

          {/* Preset queries */}
          <div className="flex flex-wrap gap-2 mb-6">
            {presetQueries.map((pq) => (
              <button
                key={pq.key}
                onClick={() => handleQuery(pq.key)}
                className="glass px-4 py-2 rounded-xl text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-purple-500/40 transition-all hover:bg-purple-500/10 flex items-center gap-2"
              >
                <span>{pq.icon}</span>
                {t(pq.key)}
              </button>
            ))}
          </div>

          {/* Chat area */}
          <div ref={chatRef} className="min-h-[200px] mb-6 space-y-4">
            {query && (
              <>
                {/* User message */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="glass rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%] bg-purple-500/10 border-purple-500/20">
                    <p className="text-sm text-[var(--text-primary)]">{query}</p>
                  </div>
                </motion.div>

                {/* AI response */}
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-xs text-white">AI</span>
                  </div>
                  <div className="glass rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {displayedText}
                      {isTyping && <span className="inline-block w-0.5 h-4 bg-purple-400 ml-1 animate-blink" />}
                    </p>
                  </div>
                </motion.div>
              </>
            )}

            {/* Insight cards */}
            <AnimatePresence>
              {activeResponse && (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {activeResponse.insights.map((insight, i) => (
                    <motion.div
                      key={insight.labelKey}
                      className="glass rounded-xl p-3 hover:bg-purple-500/5 transition-colors"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="text-lg mb-1">{insight.icon}</div>
                      <div className="text-xs text-purple-400 font-semibold mb-1">{t(insight.labelKey)}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{t(insight.valueKey)}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action buttons */}
            <AnimatePresence>
              {activeResponse && (
                <motion.div
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {activeResponse.actionKeys.map((actionKey) => (
                    <button
                      key={actionKey}
                      className="px-4 py-2 rounded-xl text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/20 hover:text-[var(--text-primary)] transition-all"
                    >
                      {t(actionKey)}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {!query && (
              <div className="flex items-center justify-center h-[200px] text-[var(--text-secondary)] text-sm">
                {t('ai_empty')}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleQuery()}
              placeholder={t('ai_placeholder')}
              className="flex-1 glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-purple-500/40 bg-transparent"
            />
            <button
              onClick={() => handleQuery()}
              className="btn-primary px-6 py-3 text-sm rounded-xl"
            >
              {t('ai_ask')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
