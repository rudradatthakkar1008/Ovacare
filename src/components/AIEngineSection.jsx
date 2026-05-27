import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedHeading, AnimatedSubtext } from './ui/AnimatedText';

const presetQueries = [
  { q: 'I missed my period', icon: '📅' },
  { q: 'I have acne', icon: '🔴' },
  { q: 'Why am I gaining weight?', icon: '⚖️' },
  { q: 'I feel anxious lately', icon: '😟' },
  { q: 'My hair is falling out', icon: '💇‍♀️' },
];

const aiResponses = {
  'I missed my period': {
    response: "I understand how concerning a missed period can be. Based on common PMOS patterns, there are several factors that could contribute to cycle irregularity. Let me analyze this for you.",
    insights: [
      { label: 'Possible Cause', value: 'Hormonal imbalance (elevated androgens)', icon: '🔬' },
      { label: 'Stress Impact', value: 'High cortisol can suppress ovulation', icon: '🧠' },
      { label: 'Recommendation', value: 'Track basal temperature for 2 weeks', icon: '🌡️' },
    ],
    actions: ['Schedule Doctor Consultation', 'Start Stress Management Plan', 'Log Symptoms'],
  },
  'I have acne': {
    response: "Hormonal acne is one of the most common PMOS symptoms, often caused by excess androgen levels. Let me help you understand what's happening and create a plan.",
    insights: [
      { label: 'Root Cause', value: 'Androgen-driven sebum overproduction', icon: '🔬' },
      { label: 'Cycle Phase', value: 'Often worsens during luteal phase', icon: '📊' },
      { label: 'Recommendation', value: 'Anti-inflammatory diet + skincare routine', icon: '🥗' },
    ],
    actions: ['View Indian Diet Plan', 'Track Skin Changes', 'Book Dermatology Consult'],
  },
  'Why am I gaining weight?': {
    response: "Weight changes with PMOS are often linked to insulin resistance and hormonal imbalances. This is very common and absolutely manageable with the right approach.",
    insights: [
      { label: 'Key Factor', value: 'Insulin resistance affects 70% of PMOS women', icon: '📈' },
      { label: 'Metabolism', value: 'Slower metabolic rate due to hormonal shifts', icon: '🔥' },
      { label: 'Solution', value: 'PMOS-specific exercise + balanced Indian meals', icon: '🏃‍♀️' },
    ],
    actions: ['Start Wellness Plan', 'Track Daily Meals', 'Join Community Support'],
  },
  'I feel anxious lately': {
    response: "Anxiety is closely connected to hormonal fluctuations in PMOS. Your feelings are valid, and there are evidence-based strategies that can help you feel better.",
    insights: [
      { label: 'Connection', value: 'Progesterone imbalance affects GABA receptors', icon: '🧠' },
      { label: 'Impact', value: '40% of PMOS women report anxiety symptoms', icon: '📊' },
      { label: 'Recommendation', value: 'Yoga, breathwork, and adaptogenic herbs', icon: '🧘' },
    ],
    actions: ['Start Guided Meditation', 'Track Mood Patterns', 'Speak to Counselor'],
  },
  'My hair is falling out': {
    response: "Hair thinning can be distressing. In PMOS, it's often caused by a combination of elevated androgens and nutritional deficiencies. Let's work on a holistic solution.",
    insights: [
      { label: 'Cause', value: 'DHT (dihydrotestosterone) miniaturizes follicles', icon: '🔬' },
      { label: 'Nutrients', value: 'Often linked to low iron, zinc, or vitamin D', icon: '💊' },
      { label: 'Plan', value: 'Nutrient-rich Indian diet + scalp care routine', icon: '🥗' },
    ],
    actions: ['Upload Lab Reports', 'Get Diet Recommendations', 'Book Trichology Consult'],
  },
};

export default function AIEngineSection() {
  const [query, setQuery] = useState('');
  const [activeResponse, setActiveResponse] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const chatRef = useRef(null);

  const handleQuery = (q) => {
    const queryText = q || query;
    if (!queryText.trim()) return;
    
    setQuery(queryText);
    setIsTyping(true);
    setDisplayedText('');
    setActiveResponse(null);

    const response = aiResponses[queryText] || aiResponses['I missed my period'];
    
    // Simulate AI typing
    let i = 0;
    const text = response.response;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setActiveResponse(response);
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
        {/* Connection lines simulation */}
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
            <span className="text-sm text-purple-300">Powered by Advanced AI</span>
          </motion.div>
          <AnimatedHeading className="text-4xl sm:text-5xl font-extrabold mb-4">
            Your AI Health Companion
          </AnimatedHeading>
          <AnimatedSubtext className="text-lg max-w-xl mx-auto">
            Ask anything about your symptoms. Our AI provides personalized, evidence-based guidance.
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
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">OvaCare AI Assistant</div>
              <div className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Ready to help
              </div>
            </div>
            <div className="ml-auto flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="text-xs text-purple-300">Holographic Mode</span>
            </div>
          </div>

          {/* Preset queries */}
          <div className="flex flex-wrap gap-2 mb-6">
            {presetQueries.map((pq) => (
              <button
                key={pq.q}
                onClick={() => handleQuery(pq.q)}
                className="glass px-4 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-all hover:bg-purple-500/10 flex items-center gap-2"
              >
                <span>{pq.icon}</span>
                {pq.q}
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
                    <p className="text-sm text-white">{query}</p>
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
                    <p className="text-sm text-gray-300 leading-relaxed">
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
                      key={insight.label}
                      className="glass rounded-xl p-3 hover:bg-purple-500/5 transition-colors"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="text-lg mb-1">{insight.icon}</div>
                      <div className="text-xs text-purple-400 font-semibold mb-1">{insight.label}</div>
                      <div className="text-xs text-gray-400">{insight.value}</div>
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
                  {activeResponse.actions.map((action) => (
                    <button
                      key={action}
                      className="px-4 py-2 rounded-xl text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all"
                    >
                      {action}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {!query && (
              <div className="flex items-center justify-center h-[200px] text-gray-500 text-sm">
                Click a question above or type your own to start...
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
              placeholder="Ask about your symptoms..."
              className="flex-1 glass rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 bg-transparent"
            />
            <button
              onClick={() => handleQuery()}
              className="btn-primary px-6 py-3 text-sm rounded-xl"
            >
              Ask AI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
