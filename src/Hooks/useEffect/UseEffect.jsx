import React, { useEffect, useState } from 'react';

export default function UseEffect() {

    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const apiData = await response.json();
            setData(apiData.products);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (showData) {
            handleData(); 
        } else {
            setData([]); 
        }
    }, [showData]);

    return (
        <div>
            <h1>useEffect Hook</h1>

            <button onClick={() => setShowData(!showData)}>
                {showData ? "Hide Products" : "Show Products"}
            </button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <ul>
                {
                    data.map((item) => (
                        <li key={item.id}>
                            <span>{item.title}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
