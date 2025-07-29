import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                // Check if the response is ok or not
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON data from the response
                const products = await response.json();

                setData(products); // Set the fetched data to state

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }

        };
        if (url) {
            fetchProducts();
        }
    }, [url]);
    return { data, loading, error };
}

export default useFetchData;