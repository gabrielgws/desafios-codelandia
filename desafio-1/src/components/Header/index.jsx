import styles from './styles.module.scss';

import { AiOutlineSearch } from 'react-icons/ai';

function Header({search, handleChange}) {

  return(
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={styles.headerMenu}>
          <h1>DESAFIO 1 - Blog</h1>
          <p>blog</p>
        </div>
        <div className={styles.search}>
          <h2><AiOutlineSearch /></h2>
          <input
            value={search}
            type="text"
            placeholder='Pesquisar no blog'
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;