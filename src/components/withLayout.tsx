import React from 'react';
import styles from './withLayout.module.css';
import Header from './Header';

export function withLayout<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
): React.FC<P> {
  const Wrapped: React.FC<P> = (props) => (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Component {...props} />
      </main>
      <footer>Footer</footer>
    </div>
  );

  Wrapped.displayName = `withLayout(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped;
}
