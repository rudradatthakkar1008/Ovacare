import { motion } from 'framer-motion';
import GlowButton from './ui/GlowButton';

export default function FinalCTASection() {
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
        {/* Icon */}
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

        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          OvaCare is helping women{' '}
          <span className="gradient-text">reclaim control</span>{' '}
          over their lives.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg text-gray-400 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Join thousands of Indian women who are taking charge of their hormonal health with AI-powered personalized care.
        </motion.p>

        {/* Stats */}
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
          {[
            { value: '50K+', label: 'Women on Waitlist' },
            { value: '4.9★', label: 'User Rating' },
            { value: '92%', label: 'Symptom Improvement' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-3xl font-extrabold gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GlowButton className="min-w-[200px]">
            💌 Join Waitlist
          </GlowButton>
          <GlowButton variant="secondary" className="min-w-[200px]">
            📱 Download App
          </GlowButton>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {['🔒 HIPAA Compliant', '🇮🇳 Made in India', '🏥 Doctor Approved', '🛡️ Data Secure'].map(badge => (
            <span key={badge} className="glass px-4 py-2 rounded-full text-xs text-gray-400">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
