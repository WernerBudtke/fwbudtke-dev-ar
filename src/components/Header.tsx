import { Link } from '@tanstack/react-router';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import Typography from './Typography';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  const navLinks = [
    { to: '/', label: t('navigationLinkHome') },
    { to: '/about', label: t('navigationLinkAbout') },
    { to: '/contact', label: t('navigationLinkContact') },
    { to: '/fun', label: t('navigationLinkFun') },
  ];

  return (
    <header className="navbar bg-neutral flex justify-between">
      <div className="navbar-start">
        <div className="dropdown sm:hidden">
          <Link to="/" role="button" tabIndex={0} className="btn btn-ghost" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </Link>
          <nav tabIndex={-1}>
            <ul className="menu menu-sm dropdown-content z-1 shadow bg-accent-content rounded-box w-52 gap-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden sm:block">
          <Link to="/" className="btn btn-base text-primary text-2xl" role="button">
            <Typography as="h1">F. W. BUDTKE</Typography>
          </Link>
        </div>
      </div>
      <nav className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="navbar-end">
        <LanguageSelector />
      </div>
    </header>
  );
};

Header.DisplayName = 'Header';

export default Header;
