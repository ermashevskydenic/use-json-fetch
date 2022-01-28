import { useState,useEffect } from "react";

export default function useFetch(baseUrl, opts) {

  const [data, setData] = useState(opts);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(baseUrl)
          .then(response => response.json())
          .then(result => setData(result))
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }

  }, [baseUrl])

  return [{ data, loading, error }];
}
