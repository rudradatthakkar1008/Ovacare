import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { AnimatedHeading, AnimatedSubtext } from './ui/AnimatedText';

const features = [
  {
    icon: '🤖',
    title: 'AI Health Assistant',
    desc: 'Get 24/7 personalized health guidance powered by advanced AI trained on women\'s hormonal health.',
    gradient: 'from-purple-500/20 to-blue-500/20',
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: '⚖️',
    title: 'Hormonal Balance',
    desc: 'Track and optimize your hormonal health with AI-driven balance scores and insights.',
    gradient: 'from-pink-500/20 to-purple-500/20',
    span: 'col-span-1',
  },
  {
    icon: '📅',
    title: 'Period Tracker',
    desc: 'Smart cycle tracking with ovulation prediction, symptom logging, and AI-powered insights.',
    gradient: 'from-rose-500/20 to-pink-500/20',
    span: 'col-span-1',
  },
  {
    icon: '🥗',
    title: 'Indian Diet Plans',
    desc: 'Personalized nutrition plans featuring Indian cuisine, tailored to your cycle phase and PMOS needs.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    span: 'col-span-1',
  },
  {
    icon: '🧘‍♀️',
    title: 'Yoga & Wellness',
    desc: 'Curated yoga routines and meditation sessions synced with your hormonal cycle.',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    span: 'col-span-1',
  },
  {
    icon: '👩‍⚕️',
    title: 'Doctor Consultations',
    desc: 'Connect with certified gynecologists and endocrinologists for expert PMOS guidance.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: '🎮',
    title: 'Gamification',
    desc: 'Stay motivated with daily streaks, XP points, wellness badges, and reward coupons.',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    span: 'col-span-1',
  },
  {
    icon: '💜',
    title: 'Women Community',
    desc: 'Join a supportive community of women managing PMOS. Share stories, tips, and motivation.',
    gradient: 'from-purple-500/20 to-fuchsia-500/20',
    span: 'col-span-1',
  },
  {
    icon: '🔬',
    title: 'Lab Reports',
    desc: 'Upload and track lab reports with AI-powered analysis and trend monitoring.',
    gradient: 'from-teal-500/20 to-cyan-500/20',
    span: 'col-span-1',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimatedHeading className="text-4xl sm:text-5xl font-extrabold mb-4">
            Everything You Need
          </AnimatedHeading>
          <AnimatedSubtext className="text-lg max-w-xl mx-auto">
            A comprehensive AI-powered toolkit designed specifically for Indian women managing PMOS and hormonal health.
          </AnimatedSubtext>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <GlassCard
              key={feature.title}
              className={`${feature.span} relative overflow-hidden group`}
              delay={i * 0.06}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.desc}
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
