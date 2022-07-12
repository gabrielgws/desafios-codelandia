import React from 'react';
import styles from './styles.module.scss';

import { AiOutlineHeart } from 'react-icons/ai';

function PostContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
          <div className={styles.dateHeart}>
            <h2>12 de jul, 2021</h2>
            <p><AiOutlineHeart/></p>
          </div>

          <div className={styles.posts}>
            <h1>Agora é oficial: o Windows 11 está vindo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
          </div>
      </div>

      <div className={styles.center}>
          <div className={styles.dateHeart}>
            <h2>11 de jul, 2021</h2>
            <p><AiOutlineHeart/></p>
          </div>

          <div className={styles.posts}>
            <h1>Tim Berners-Lee vai leiloar código-fonte da web</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
          </div>
      </div>

      <div className={styles.center}>
          <div className={styles.dateHeart}>
            <h2>10 de jul, 2021</h2>
            <p><AiOutlineHeart/></p>
          </div>

          <div className={styles.posts}>
            <h1>Tem Firefox novo no pedaço e você vai querer migrar</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.</p>
          </div>
      </div>

      <div className={styles.center}>
          <div className={styles.dateHeart}>
            <h2>09 de jul, 2021</h2>
            <p><AiOutlineHeart/></p>
          </div>

          <div className={styles.posts}>
            <h1>John McAfee, criador do antivírus McAfee, morre</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
          </div>
      </div>
    </div>
  );
}

export default PostContainer;