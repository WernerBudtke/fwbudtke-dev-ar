import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="flex items-center gap-2">
      <span>EN</span>
      <input
        type="checkbox"
        checked={currentLanguage === 'es'}
        onChange={() => {
          const newLang = currentLanguage === 'en' ? 'es' : 'en';
          i18n.changeLanguage(newLang);
        }}
        className="toggle border-green-600 bg-green-500 text-green-900 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
      />
      <span>ES</span>
    </div>
  );
};

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;
