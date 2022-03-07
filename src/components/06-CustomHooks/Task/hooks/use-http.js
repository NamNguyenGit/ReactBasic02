import { useState, useCallback } from "react";

export const mockData = {
  "-MpVG2b0CRb1aZJNM_oT": {
    text: "Dhanya",
  },
  "-MpVG4wix3uRqsonf7qk": {
    text: "Learn React",
  },
  "-MpVG6_rmRssnx1NgPZp": {
    text: "Learn Redux",
  },
  "-MpVG9wmE-_L3luVyXhG": {
    text: "Learn Next.Js",
  },
};

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
