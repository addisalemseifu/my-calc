import { React, useState, useEffect } from 'react';
import '../index.css';

export default function Api() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const commentUrl = 'https://api.api-ninjas.com/v1/quotes?limit=3';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const quotes = await fetch(commentUrl, {
          method: 'GET',
          headers: { 'X-Api-Key': 'ST1XKraVMSM+a5l/yAfQ/w==qv9Hk7U7AjcuHlwZ' },
        });
        const quotesObject = await quotes.json();
        setData(quotesObject);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>This site is not responding at the moment!</div>;

  if (isLoading) return <div>Fetching data...</div>;

  return (
    <div className="my-quotes">
      {data.map((item) => (
        <h4 key={item.author}>
          -
          {' '}
          {item.quote}
        </h4>
      ))}
    </div>
  );
}
