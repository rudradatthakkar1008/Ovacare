import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="OvaCare Logo" className="h-8 w-auto" />
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
              {t('footer_tagline')}
            </p>
            <div className="flex gap-3">
              {['𝕏', 'in', 'IG', 'YT'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-xs text-gray-400 hover:text-white hover:bg-purple-500/10 transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'product',
              links: ['features', 'ai_engine', 'period_tracker', 'gamification', 'pricing'],
            },
            {
              title: 'company',
              links: ['about_us', 'careers', 'blog', 'press_kit', 'contact'],
            },
            {
              title: 'support',
              links: ['help_center', 'privacy_policy', 'terms_of_service', 'community_guidelines'],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">{t(section.title)}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-[var(--text-secondary)] hover:text-purple-400 transition-colors">
                      {t(link)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            {t('copyright')}
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            {t('made_in_india')}
          </p>
        </div>
      </div>
    </footer>
  );
}
