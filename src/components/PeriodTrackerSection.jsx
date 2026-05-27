import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedHeading, AnimatedSubtext } from './ui/AnimatedText';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const symptomOptions = ['Cramps', 'Headache', 'Bloating', 'Fatigue', 'Mood Swings', 'Acne', 'Back Pain'];
const reminderOptions = [
  { icon: '🧘‍♀️', label: 'Yoga Session', time: '7:00 AM' },
  { icon: '💧', label: 'Water Reminder', time: 'Every 2 hours' },
  { icon: '💊', label: 'Medicine', time: '9:00 PM' },
  { icon: '🧘', label: 'Meditation', time: '6:00 AM' },
];

export default function PeriodTrackerSection() {
  const [currentDate] = useState(new Date(2026, 4, 27)); // May 2026
  const [selectedDay, setSelectedDay] = useState(null);
  const [symptoms, setSymptoms] = useState({});
  const [showPopup, setShowPopup] = useState(null);

  // Period cycle simulation: period days 5-10, ovulation ~19, fertile 16-21
  const periodDays = [5, 6, 7, 8, 9, 10];
  const ovulationDay = 19;
  const fertileDays = [16, 17, 18, 19, 20, 21];
  const lutealDays = [22, 23, 24, 25, 26, 27, 28];

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  }, [currentDate]);

  const getDayType = (day) => {
    if (!day) return '';
    if (periodDays.includes(day)) return 'period';
    if (day === ovulationDay) return 'ovulation';
    if (fertileDays.includes(day)) return 'fertile';
    if (lutealDays.includes(day)) return 'luteal';
    return 'normal';
  };

  const getDayStyle = (type) => {
    switch (type) {
      case 'period': return 'bg-pink-500/30 border-pink-500/50 text-pink-300';
      case 'ovulation': return 'bg-purple-500/30 border-purple-500/50 text-purple-300 ring-2 ring-purple-400/30';
      case 'fertile': return 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300';
      case 'luteal': return 'bg-amber-500/10 border-amber-500/20 text-amber-300';
      default: return 'bg-white/3 border-white/5 text-gray-400 hover:bg-white/5';
    }
  };

  const toggleSymptom = (day, symptom) => {
    setSymptoms(prev => {
      const daySymptoms = prev[day] || [];
      return {
        ...prev,
        [day]: daySymptoms.includes(symptom)
          ? daySymptoms.filter(s => s !== symptom)
          : [...daySymptoms, symptom]
      };
    });
  };

  return (
    <section id="tracker" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <AnimatedHeading className="text-4xl sm:text-5xl font-extrabold mb-4">
            Smart Period Tracker
          </AnimatedHeading>
          <AnimatedSubtext className="text-lg max-w-xl mx-auto">
            Track your cycle, log symptoms, set reminders, and get AI-powered predictions — all in one beautiful calendar.
          </AnimatedSubtext>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <motion.div
            className="lg:col-span-2 glass-card p-6 rounded-3xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Month Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <div className="flex gap-2">
                {[
                  { color: 'bg-pink-500', label: 'Period' },
                  { color: 'bg-purple-500', label: 'Ovulation' },
                  { color: 'bg-indigo-500', label: 'Fertile' },
                  { color: 'bg-amber-500', label: 'Luteal' },
                ].map(l => (
                  <span key={l.label} className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className={`w-2 h-2 rounded-full ${l.color}`} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {DAYS.map(d => (
                <div key={d} className="text-center text-xs text-gray-500 font-medium py-1">{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, i) => {
                const type = getDayType(day);
                const isSelected = selectedDay === day;
                const hasSymptoms = symptoms[day]?.length > 0;
                return (
                  <motion.button
                    key={i}
                    className={`aspect-square rounded-xl border text-sm font-medium relative flex items-center justify-center transition-all ${
                      day ? getDayStyle(type) : 'invisible'
                    } ${isSelected ? 'ring-2 ring-purple-400 scale-105' : ''}`}
                    onClick={() => day && setSelectedDay(day === selectedDay ? null : day)}
                    whileHover={day ? { scale: 1.1 } : {}}
                    whileTap={day ? { scale: 0.95 } : {}}
                  >
                    {day}
                    {hasSymptoms && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    )}
                    {day === 27 && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Selected day details */}
            <AnimatePresence>
              {selectedDay && (
                <motion.div
                  className="mt-6 glass rounded-2xl p-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <h4 className="text-sm font-semibold text-white mb-3">
                    May {selectedDay} — Log Symptoms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {symptomOptions.map(s => (
                      <button
                        key={s}
                        onClick={() => toggleSymptom(selectedDay, s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          symptoms[selectedDay]?.includes(s)
                            ? 'bg-purple-500/30 border border-purple-500/50 text-purple-300'
                            : 'glass text-gray-400 hover:text-white'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sidebar — Reminders & Predictions */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Cycle prediction */}
            <div className="glass-card p-5 rounded-2xl">
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">🔮</span> AI Prediction
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Next Period</span>
                  <span className="text-xs font-semibold text-pink-400">June 5</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '73%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Ovulation</span>
                  <span className="text-xs font-semibold text-purple-400">June 19</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Cycle Length</span>
                  <span className="text-xs font-semibold text-blue-400">30 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Regularity</span>
                  <span className="text-xs font-semibold text-green-400">85% regular</span>
                </div>
              </div>
            </div>

            {/* Reminders */}
            <div className="glass-card p-5 rounded-2xl">
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span>⏰</span> Reminders
              </h4>
              <div className="space-y-3">
                {reminderOptions.map((r, i) => (
                  <motion.div
                    key={r.label}
                    className="flex items-center gap-3 glass rounded-xl px-3 py-2.5 hover:bg-purple-500/5 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-lg">{r.icon}</span>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-white">{r.label}</div>
                      <div className="text-[10px] text-gray-500">{r.time}</div>
                    </div>
                    <div className="w-8 h-5 rounded-full bg-purple-500/30 flex items-center justify-end px-0.5">
                      <div className="w-4 h-4 rounded-full bg-purple-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick notifications */}
            <motion.div
              className="glass-card p-4 rounded-2xl border-purple-500/20"
              animate={{ boxShadow: ['0 0 0 rgba(168,85,247,0)', '0 0 20px rgba(168,85,247,0.15)', '0 0 0 rgba(168,85,247,0)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌸</span>
                <div>
                  <div className="text-xs font-semibold text-purple-300">Cycle Synced!</div>
                  <div className="text-[10px] text-gray-500">Your cycle is tracking on schedule</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
