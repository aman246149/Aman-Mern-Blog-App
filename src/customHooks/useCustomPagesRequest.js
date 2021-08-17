import { useEffect, useState } from "react";
import axios from "../NetRequest/AxiosInstance";


function useCustomPagesRequest(endurl) {
  const [responsedata, setresponsedata] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    axios
      .get(endurl)
      .then((response) => {
        setresponsedata(response.data.success);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });

    return () => {
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { responsedata, isLoading, isError };
}

export default useCustomPagesRequest;
