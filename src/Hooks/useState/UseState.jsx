import React, { useState } from 'react';

export default function UseState() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState({
        name: "" ,
        city: ""
    });

    const decreament = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const increament = () => {
        setCount(count + 1);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({...data,
            [name]: value
        })
    }

    return (
        <div>
            <h1>useState Hook</h1>
            <button onClick={decreament}>Decreament</button>
            <span>{count}</span>
            <button onClick={increament}>Increament</button>

            <div className='data'>
                <input onChange={handleChange} value={data.name} autocomplete="off"  type="text" name='name' placeholder='Enter Name' />
                <select onChange={handleChange} value={data.city} name="city" id="city">
                    <option value="Mumbai">Mumbai</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Azamgarh">Azamgarh</option>
                    <option value="Jaunpur">Jaunpur</option>
                    <option value="Mirzapur">Mirzapur</option>
                </select>

                <p>Your Name : {data.name === "" ? "Inderpal" : data.name}</p>
                <p>City : {data.city === "" ? "Azamgarh" : data.city}</p>
            </div>
        </div>
    )
}
