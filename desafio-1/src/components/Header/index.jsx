import React from 'react';
import styles from './styles.module.scss';

import { AiOutlineSearch } from 'react-icons/ai';

function Header() {
  return(
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={styles.headerMenu}>
          <h1>DESAFIO 1 - Blog</h1>
          <p>blog</p>
        </div>
        <div className={styles.search}>
          <h2><AiOutlineSearch /></h2>
          <input type="text" placeholder='Pesquisar no blog' />
        </div>
      </div>
    </div>
  );
}

export default Header;