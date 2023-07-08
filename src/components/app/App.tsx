import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import api from '../../utils/api';
import Loader from '../loader/Loader';
import LoaderPoints from '../loader-points/LoaderPoints';
import Button from '../button/Button';

function App() {
  const [quote, setQuote] = useState({ quote: '', author: '' });
  const [isLoading, setIsLoading] = useState(false);
  const root = document.querySelector('#root') as HTMLElement;

  const changeColor = useCallback(() => {
    root.style.backgroundColor = `${generateColor()}`;
    root.style.transition = 'background-color 1s';
  }, []);

  useEffect(() => {
    handleGetQuote();
  }, []);

  const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  const handleGetQuote = () => {
    changeColor();
    api.getQuote()
      .then((res) => {
        setQuote({
          quote: res.quoteText,
          author: res.quoteAuthor
        });
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(`Возникла ошибка: ${err}`);
      });
      setIsLoading(false);
  }

  return (
    <div className='main'>
      <blockquote className='main__bubble'>
        {isLoading ?
          <p>{quote.quote || 'Работает? Не трогай.'}</p>
        :
          <Loader />}
      </blockquote>
      {isLoading ?
        <p className='main__author'>{quote.author || 'Неизвестный автор'}</p>
      :
        <LoaderPoints />
      }
      <Button onClick={handleGetQuote} text='Новая цитата' />
    </div>
  );
}

export default App;
