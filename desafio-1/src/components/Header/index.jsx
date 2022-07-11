import React from 'react';
import styles from './styles.module.scss';

function Header() {
  return(
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={styles.headerMenu}>
          <h1>DESAFIO 1 - Blog</h1>
          <p>blog</p>
        </div>
        <div className={styles.search}>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Header;