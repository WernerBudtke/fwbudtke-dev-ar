import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="languageToggle">
        <span>EN</span>
      </label>
      <input
        type="checkbox"
        id="languageToggle"
        checked={currentLanguage === 'es'}
        onChange={() => {
          const newLang = currentLanguage === 'en' ? 'es' : 'en';
          i18n.changeLanguage(newLang);
        }}
        className="toggle border-green-600 bg-green-500 text-green-900 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
      />
      <label htmlFor="languageToggle">
        <span>ES</span>
      </label>
    </div>
  );
};

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;
