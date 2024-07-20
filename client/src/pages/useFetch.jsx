import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const results = await axios(url);
        setData(results.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, isError, isLoading };
};

export default useFetch;
