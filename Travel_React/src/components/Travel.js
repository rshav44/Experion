import React from 'react'
import { useState } from "react";
import axios from "axios";

const Registration = () => {
    const [travel, setTravel] = useState([]);
    function handlechange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setTravel((values) => ({ ...values, [name]: value }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(travel);
        axios.post("http://localhost:8000/travelRequest", travel).then((response) => {
            console.log(response);
            window.location = "/library";
            setTravel(response.data);
        });
    }

    return (
        <>
            <section className='showcase login'>
                <div className='showcase-overlay'>
                    <form className='form-control' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='Cause'
                            id='Cause'
                            placeholder='Enter cause of travel'
                            value={travel.Cause || ""}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type='text'
                            name='Source'
                            id='Source'
                            placeholder='Enter your source of travel'
                            value={travel.Source || ""}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type='text'
                            name='Destination'
                            id='Destination'
                            placeholder='Enter your Destination'
                            value={travel.Destination || ""}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type="text"
                            name="mode"
                            placeholder='Enter your Mode of travelling'
                            value={travel.mode || ""}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type='Date'
                            name='frm'
                            id='frm'
                            placeholder='Enter your From date'
                            value={travel.frm || ""}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type='Date'
                            name='to'
                            id='to'
                            value={travel.to|| ""}
                onChange={handlechange}
                            placeholder='Enter your to date'
                            required
                        />
                        <input
                            type='text'
                            name='days'
                            id='days'
                            value={travel.days || ""}
                onChange={handlechange}
                            placeholder='Enter your number of days'
                            required
                        />
                        <input
                            type='text'
                            name='priority'
                            id='priority'
                            placeholder='Enter your priority'
                            onChange={handlechange}
                            required
                        />
                        <input
                            type='text'
                            name='projctid'
                            id='projctid'
                            placeholder='Enter your project id'
                            required
                            value={travel.projctid || ""}
                            onChange={handlechange}
                        />
                        <input
                            type='text'
                            name='emplid'
                            id='emplid'
                            placeholder='Enter your employee id'
                            value={travel.emplid || ""}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type='text'
                            name='status'
                            id='status'
                            placeholder='Enter your status'
                            value={travel.status || ""}
                            onChange={handlechange}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Registration
