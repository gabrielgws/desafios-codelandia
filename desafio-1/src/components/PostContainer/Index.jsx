import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import Zoom from 'react-reveal/Zoom';

import { AiOutlineHeart } from 'react-icons/ai';

function PostContainer({search}) {
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/blog/')
    .then(response => response.json())
    .then(data => setApi(data))
  }, []);

   return (
    <div className={styles.container}>
        {api.filter((setApi) => {
          if (api === ""){
            return setApi;
          } else if (setApi.title.toLowerCase().includes(search.toLowerCase())){
            return setApi.title;
          }
          return false;
        }).map((setApi) => (
          <Zoom>
            <div key={setApi.id} className={styles.center}>
              <div className={styles.postsWraper}>
                <div className={styles.dateHeart}>
                  <h2>{setApi.data}</h2>
                  <p><AiOutlineHeart/></p>
                </div>

                <div className={styles.posts}>
                  <h1>{setApi.title}</h1>
                  <p>{setApi.body}</p>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
  );
}

export default PostContainer;