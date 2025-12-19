import React from 'react';
import styles from './withLayout.module.css';
import Header from './Header';
import Footer from './Footer';

export function withLayout<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
): React.FC<P> {
  const Wrapped: React.FC<P> = (props) => (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Component {...props} />
      </main>
      <Footer />
    </div>
  );

  Wrapped.displayName = `withLayout(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped;
}
