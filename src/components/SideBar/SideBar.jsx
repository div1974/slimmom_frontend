import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  //   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  //   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  //   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 767px)",
  });

  const style = isMobile ? styles.Mobile : isTablet ? styles.Tablet : isDesktop ? styles.Desktop : styles.Desktop;
  // const style = isDesktop ? styles.Desktop : styles.Desktop;
  // console.log(style);
  return (
    <>
      <div className={style}>
        <div className={styles.InfoBlocks}>
          <h1>Сводка за</h1>
          <div className={styles.Summary}>
            {/* <h1>Сводка за</h1> */}
            <div>
              {/* <h1>Сводка за</h1> */}
              <p>Осталось</p>
              <p>Употреблено</p>
              <p>Дневная норма</p>
              <p>n% от нормы</p>
            </div>
            <div>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
            </div>
          </div>
        </div>
        <div className={styles.InfoBlocks}>
          <h1>Нерекомендуемые продукты</h1>
        </div>
      </div>
    </>
  );
}


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchArticles = () => {
      return axios
        .get('https://hn.algolia.com/api/v1/search?query=react')
        .then(({ data }) => setArticles(data.hits))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    };

    fetchArticles();

    return () => {
      // сделать отмену http-запроса чтобы небыло утечки памяти при unmount
    };
  }, []);

  return (
    <ul>
      {articles.map(({ objectID, title, url }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
