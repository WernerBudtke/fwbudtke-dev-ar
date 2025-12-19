import { Link } from '@tanstack/react-router';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import Typography from './Typography';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="navbar bg-neutral flex justify-between">
      <nav className="flex items-center gap-2">
        <Link to="/" className="btn btn-base text-primary text-2xl">
          <Typography as="h1">F. W. BUDTKE</Typography>
        </Link>
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/">{t('navigationLinkHome')}</Link>
          </li>
          <li>
            <Link to="/about">{t('navigationLinkAbout')}</Link>
          </li>
          <li>
            <Link to="/contact">{t('navigationLinkContact')}</Link>
          </li>
        </ul>
      </nav>
      <LanguageSelector />
    </header>
  );
};

Header.DisplayName = 'Header';

export default Header;
