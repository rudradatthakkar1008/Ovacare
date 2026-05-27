import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      "features": "Features",
      "ai_engine": "AI Engine",
      "tracker": "Tracker",
      "pricing": "Pricing",
      "dashboard": "Dashboard",
      "get_started": "Get Started",
      
      // App Loading
      "ai_powered_health": "AI-Powered Hormonal Health",
      
      // Footer
      "footer_tagline": "AI-powered hormonal health companion for Indian women. Understand, balance, and thrive.",
      "product": "Product",
      "period_tracker": "Period Tracker",
      "gamification": "Gamification",
      "company": "Company",
      "about_us": "About Us",
      "careers": "Careers",
      "blog": "Blog",
      "press_kit": "Press Kit",
      "contact": "Contact",
      "support": "Support",
      "help_center": "Help Center",
      "privacy_policy": "Privacy Policy",
      "terms_of_service": "Terms of Service",
      "community_guidelines": "Community Guidelines",
      "copyright": "© 2026 OvaCare Health Technologies Pvt. Ltd. All rights reserved.",
      "made_in_india": "Made with 💜 in India",

      // Hero Section
      "hero_badge": "India's #1 AI-Powered PMOS Care Platform",
      "hero_title_1": "Understand.",
      "hero_title_2": "Balance.",
      "hero_title_3": "Thrive.",
      "hero_subheadline": "AI-powered hormonal health companion for Indian women.",
      "hero_get_started": "✨ Get Started",
      "hero_watch_demo": "▶ Watch Demo",
      "hero_tagline": "Everything she needs, in one place",
      
      // Hero Features
      "hero_feat_1": "Hormonal Balance",
      "hero_feat_2": "AI Guidance",
      "hero_feat_3": "Period Tracking",
      "hero_feat_4": "Doctor Consultation",
      "hero_feat_5": "Gamification",
      "hero_feat_6": "Wellness Plans",
      
      // Hero Streaks
      "hero_streak_1": "7 Day Balance Streak",
      "hero_streak_2": "Cycle Synced",
      "hero_streak_3": "Wellness Points Earned",
      
      // Hero Chat
      "hero_chat_bot": "OvaCare AI",
      "hero_chat_msg1": "Hi! I noticed your cycle is 3 days late. Let me analyze your hormonal patterns... 💜",
      "hero_chat_insight_title": "AI Insight",
      "hero_chat_msg2": "Your cortisol levels may be elevated. I recommend yoga and deep breathing today.",
      "hero_chat_pill1": "Yoga",
      "hero_chat_pill2": "Supplements",
      "hero_chat_pill3": "Diet"
    }
  },
  hi: {
    translation: {
      // Navbar
      "features": "विशेषताएं",
      "ai_engine": "एआई इंजन",
      "tracker": "ट्रैकर",
      "pricing": "मूल्य निर्धारण",
      "dashboard": "डैशबोर्ड",
      "get_started": "शुरू करें",
      
      // App Loading
      "ai_powered_health": "एआई-संचालित हार्मोनल स्वास्थ्य",
      
      // Footer
      "footer_tagline": "भारतीय महिलाओं के लिए एआई-संचालित हार्मोनल स्वास्थ्य साथी। समझें, संतुलन बनाएं और आगे बढ़ें।",
      "product": "उत्पाद",
      "period_tracker": "पीरियड ट्रैकर",
      "gamification": "गेमीफिकेशन",
      "company": "कंपनी",
      "about_us": "हमारे बारे में",
      "careers": "करियर",
      "blog": "ब्लॉग",
      "press_kit": "प्रेस किट",
      "contact": "संपर्क करें",
      "support": "सहायता",
      "help_center": "सहायता केंद्र",
      "privacy_policy": "गोपनीयता नीति",
      "terms_of_service": "सेवा की शर्तें",
      "community_guidelines": "सामुदायिक दिशानिर्देश",
      "copyright": "© 2026 ओवाकेयर हेल्थ टेक्नोलॉजीज प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।",
      "made_in_india": "भारत में 💜 के साथ निर्मित",

      // Hero Section
      "hero_badge": "भारत का नंबर 1 एआई-संचालित पीएमओएस केयर प्लेटफॉर्म",
      "hero_title_1": "समझें।",
      "hero_title_2": "संतुलन बनाएं।",
      "hero_title_3": "आगे बढ़ें।",
      "hero_subheadline": "भारतीय महिलाओं के लिए एआई-संचालित हार्मोनल स्वास्थ्य साथी।",
      "hero_get_started": "✨ शुरू करें",
      "hero_watch_demo": "▶ डेमो देखें",
      "hero_tagline": "उसे जो कुछ भी चाहिए, एक ही स्थान पर",
      
      // Hero Features
      "hero_feat_1": "हार्मोनल संतुलन",
      "hero_feat_2": "एआई मार्गदर्शन",
      "hero_feat_3": "पीरियड ट्रैकिंग",
      "hero_feat_4": "डॉक्टर परामर्श",
      "hero_feat_5": "गेमीफिकेशन",
      "hero_feat_6": "वेलनेस प्लान",
      
      // Hero Streaks
      "hero_streak_1": "7 दिन संतुलन स्ट्रीक",
      "hero_streak_2": "साइकिल सिंक",
      "hero_streak_3": "वेलनेस पॉइंट्स अर्जित किए",
      
      // Hero Chat
      "hero_chat_bot": "ओवाकेयर एआई",
      "hero_chat_msg1": "नमस्ते! मैंने देखा कि आपका चक्र 3 दिन लेट है। मुझे आपके हार्मोनल पैटर्न का विश्लेषण करने दें... 💜",
      "hero_chat_insight_title": "एआई इनसाइट",
      "hero_chat_msg2": "आपका कोर्टिसोल स्तर ऊंचा हो सकता है। मैं आज योग और गहरी सांस लेने की सलाह देती हूं।",
      "hero_chat_pill1": "योग",
      "hero_chat_pill2": "सप्लीमेंट्स",
      "hero_chat_pill3": "आहार"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
