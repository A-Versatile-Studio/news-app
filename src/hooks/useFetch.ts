import axios from "axios";
import { useEffect, useState } from "react";

const API = "https://newsapi.org/v2"
const KEY = "b0ae4133be2442148d2581435c590d6e"
export function useFetch(params: string, second?: string, search?: string) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    const getData = async () => {
        try {

            setLoading(true);
            let reqURL = search ? `${API}/${params}?${second}=${search}` :  `${API}/${params}`
            const req = await axios.get(reqURL, {
                headers: {
                    "X-Api-Key": KEY
                }
            })
            if (req.status === 200) {
                setData(req.data)
            }
        }
        catch (error) {
            return 404
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [params])

    return {data, loading}
}