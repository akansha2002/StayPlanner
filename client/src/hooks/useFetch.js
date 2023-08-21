// import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetch = (url) => {
//   const [data, setData] = useState([]); // State to hold fetched data
//   const [loading, setLoading] = useState(false); // State to track loading status
//   const [error, setError] = useState(false); // State to track errors


  
// // whenever our url changes, we r gonna fire this function
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // Start loading
//       try {
//         const res = await axios.get(url); // Fetch data from the provided URL
//         setData(res.data); // Update the data state with the fetched data
//       } catch (err) {
//         setError(err); // If there's an error, update the error state
//       }
//       setLoading(false); // Loading is done
//     };
//     fetchData(); // Call the fetchData function when the component mounts or when the URL changes
//   }, [url]); // Dependency array: it triggers the effect whenever the URL changes

//   const reFetch = async () => {
//     setLoading(true); // Start loading
//     try {
//       const res = await axios.get(url); // Fetch data from the URL again
//       setData(res.data); // Update the data state with the newly fetched data
//     } catch (err) {
//       setError(err); // If there's an error, update the error state
//     }
//     setLoading(false); // Loading is done
//   };

//   // Return the data, loading status, error status, and a function to refetch data
//   return { data, loading, error, reFetch };
// };

// export default useFetch;
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;