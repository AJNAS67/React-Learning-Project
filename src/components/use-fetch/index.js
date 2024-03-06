import React, { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    fetchData();
  }, [url]);
  async function fetchData() {
    setPending(true);
    try {
      const resp = await fetch(url, { ...options });
      if (!resp.ok) throw new Error(resp.statusText);

      const result = await resp.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(`${error}. Some Error Occured`);
      setPending(false);
    }
  }
  return { data, error, pending };
}
