import { useCallback } from "react";
import { useData } from "../hooks/useData";

const useFetch = () => {
  const { updateData, updateIsloading, updateError } = useData();

  const fetchData = useCallback(
    async (url) => {
      updateIsloading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const result = await response.json();
        updateIsloading(false);
        updateData(result);
      } catch (err) {
        updateError(err.message);
        updateIsloading(false);
      }

      return () => {};
    },
    [updateData, updateIsloading, updateError]
  );

  return { fetchData };
};

export default useFetch;
