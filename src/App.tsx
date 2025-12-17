import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Typography from './components/Typography'

export default function App() {
  const { t, i18n } = useTranslation()

  const switchLang = (lng: string) => i18n.changeLanguage(lng)

  return (
    <div className='h-screen flex flex-col items-center bg-gray-200'>
      <Helmet>
        <title>{t('siteTitle')} — Personal site</title>
        <meta name="description" content={t('heroSubtitle')} />
      </Helmet>
      <header className='w-full'>
        <nav aria-label="Main navigation" className='flex gap-4 items-center border-b-1 border-gray-500 p-2'>
          <Typography className='text-4xl' as="h1" font="creepster">{t('siteTitle')}</Typography>
          <div className='flex gap-2'>
            <button className='button'   onClick={() => switchLang('en')} aria-label="Switch to English">
              EN
            </button>
            <button  className="button" onClick={() => switchLang('es')} aria-label="Switch to Spanish">
              ES
            </button>
          </div>
        </nav>
      </header>

      <main id="main" className='flex-grow'>
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
