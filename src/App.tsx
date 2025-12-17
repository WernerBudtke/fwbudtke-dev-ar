import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Typography from './components/Typography'

export default function App() {
  const { t, i18n } = useTranslation()

  const switchLang = (lng: string) => i18n.changeLanguage(lng)

  return (
    <div>
      <Helmet>
        <title>{t('siteTitle')} — Personal site</title>
        <meta name="description" content={t('heroSubtitle')} />
      </Helmet>
      <header>
        <nav aria-label="Main navigation">
          <Typography as="h1" font="creepster">{t('siteTitle')}</Typography>
          <div>
            <button onClick={() => switchLang('en')} aria-label="Switch to English">
              EN
            </button>
            <button onClick={() => switchLang('es')} aria-label="Switch to Spanish">
              ES
            </button>
          </div>
        </nav>
      </header>

      <main id="main">
        <section aria-labelledby="hero-title">
          <h2 id="hero-title">{t('heroTitle')}</h2>
          <p>{t('heroSubtitle')}</p>
          <a href="#contact" role="button">{t('cta')}</a>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <h3 id="contact-title">{t('contactTitle')}</h3>
          <p>{t('contactText')}</p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Werner Budtke</p>
      </footer>
    </div>
  )
}
