import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(
          `https://open.er-api.com/v6/latest/${currency}`
        );

        let result = await res.json();

        // API rates object
        setData(result.rates);
      } catch (error) {
        console.log("API Error:", error);
      }
    }

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
