import styles from './Header.module.css';
import LanguageSelector from './LanguageSelector/LanguageSelector';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <h1>My Application Header</h1>
      <LanguageSelector />
    </header>
  );
};

Header.DisplayName = 'Header';

export default Header;
