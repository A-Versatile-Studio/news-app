import axios from "axios";
import { useEffect, useState } from "react";

// let AVAILABLE_KEYS = [
//   "b0ae4133be2442148d2581435c590d6e",
//   "ea1f7422a5004b92a533c1c9b3658040",
//   "5c511be76bb840758599f398617b8e32",
//   "38449b0c18054f7ba0c8f9ad926321a8",
//   ""
// ];
// const API = "http://localhost:3001";

// export function useFetch(params: string, second?: string, search?: string) {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<any>();

//   const getData = async () => {
//     setLoading(true);
//     let keyIndex = 0;
//     let success = false;

//     while (keyIndex < AVAILABLE_KEYS.length && !success) {
//       const KEY = AVAILABLE_KEYS[keyIndex];
//       try {
//         let reqURL = search
//           ? `${API}/${params}?${second}=${search}`
//           : `${API}/${params}`;

//         const req = await axios.get(reqURL, {
//           headers: {
//             "X-Api-Key": KEY,
//           },
//         });

//         setData(req.data);
//         success = true; // ✅ success, stop loop
//       } catch (error: any) {
//         if (axios.isAxiosError(error) && error.response?.status === 429) {
//           console.warn(`Key ${keyIndex + 1} hit rate limit. Switching key...`);
//           keyIndex++;
//         } else {
//           console.error("Request failed:", error);
//           break; // Other errors, don't retry
//         }
//       }
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     getData();
//   }, [params, search, second]);

//   return { data, loading };
// }


const BASE_URL = "https://news-app-s8op.onrender.com/news";

export function useFetch(params: string, second?: string, search?: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(BASE_URL, {
        params: { params, second, search },
      });
      setData(res.data);
    } catch (error) {
      console.error("Proxy fetch failed:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [params, second, search]);

  return { data, loading };
}
