import { useState } from "react";
import axios from "axios";
import useEffectAbort from "./useEffectAbort";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffectAbort((signal) => {
    (async () => {
      try {
        const res = await axios(url, { ...options, signal });
        setResponse(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading };
};

export default useFetch;
