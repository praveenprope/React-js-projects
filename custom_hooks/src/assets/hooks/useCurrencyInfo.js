import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${currency}`);
        }
        const result = await response.json();
        setData(result[currency]);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    }

    fetchData();
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;
