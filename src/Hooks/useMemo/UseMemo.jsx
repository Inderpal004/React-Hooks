import React, { useMemo, useState } from 'react';

export default function UseMemo() {
    const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    const [theme, setTheme] = useState(false);

    const memoizedFilteredArray = useMemo(() => {
        console.log("Filtered array recalculated");
        return array.filter((arr) => arr > 5);
    }, [array]);

    return (
        <div>
            <h1>useMemo Hook</h1>
            <ul>
                {
                    memoizedFilteredArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>

            <button onClick={() => setTheme(!theme)}>
                {theme ? "Light" : "Dark"}
            </button>
        </div>
    );
}
