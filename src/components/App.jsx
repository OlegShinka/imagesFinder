import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImages } from './api';
import { Form } from './searchbar/searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Layout } from './Layuot';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hits, setHits] = useState([]);
  const [querry, setQuerry] = useState('');
  const [page, setPage] = useState(1);
  const [isLoadMore, setLoadMore] = useState(false);

  useEffect(() => {
    // відмина 1-го рендера сторінки по умові, якщо пустий рядок запиту
    if (querry === '') {
      return;
    }
    //якщо треба використов. асинхр. фу робимо в useEffect анонімну фу і і ній вже робимо асинхр операції
    async function getHits() {
      try {
        setLoading(true);
        setError(false);
        // виклик фу http-запиту з зовніш. файлу api.jsx
        const response = await FetchImages(querry, page);

        const totalHits = response.data.totalHits;

        // по заг.кількості картинок обчис екранних стор. при per-page=12
        const totalPage = Math.ceil(totalHits / 12);
        setHits(prev => [...prev, ...response.data.hits]);

        // вмикаємо кнопку Load More при зміні стану
        if (page < totalPage) {
          setLoadMore(true);
        } else {
          setLoadMore(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getHits();
  }, [page, querry]);

  const handleSearch = searchText => {
    //при сабміті форми збереж. терміну пошуку, скидання стор. на 1, очистка попереднього масиву картинок
    setQuerry(searchText);
    setPage(1);
    setHits([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <Layout>
      <Form onSubmitForm={handleSearch} />

      {loading && <Loader />}
      {error && <p> Reload page please ...</p>}
      {hits.length > 0 && <ImageGallery hits={hits} />}
      {/* <ImageGallery hits={hits} /> */}
      {isLoadMore && <Button handleLoadMore={handleLoadMore} />}
    </Layout>
  );
};
