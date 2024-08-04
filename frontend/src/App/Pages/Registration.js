import React, { useState } from 'react'
import axios from "axios"

const Registration = () => {
    const [formdata, setFormdata] = useState({
        Name: '',
        Email: '',
        Password: ''
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata(values => ({ ...values, [name]: value }));
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formdata) {
            data.append(key, formdata[key]);
        }
        if (file) {
            data.append('avatar', file);
        }

        axios.post("http://localhost:8000/user/registration/api/v1", data, {
            headers: {
                'Content-Type': 'multipart/form-data' ,
            }
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });

        // how can Access data from FormData object ..... 
        for (let [key, value] of data.entries()) { 
            console.log(key, value);}
    }

    return (
        <div className='flex justify-center items-center mt-5 flex-col'>
            <div>
                <h1 className='text-3xl font-bold'>Welcome to Registration Page</h1>
            </div>
            <div className='mt-5'>
                <form onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <br />
                    <input
                        type='text'
                        placeholder='Enter your name'
                        onChange={handleChange}
                        name='Name'
                        value={formdata.Name}
                    />
                    <br />
                    <label>Email: </label>
                    <br />
                    <input
                        type='text'
                        placeholder='Enter your Email'
                        onChange={handleChange}
                        name='Email'
                        value={formdata.Email}
                    />
                    <br />
                    <label>Password: </label>
                    <br />
                    <input
                        type='password'
                        placeholder='Enter your Password'
                        onChange={handleChange}
                        name='Password'
                        value={formdata.Password}
                    />
                    <br />
                    <br />
                    <input
                        type='file'
                        name='avatar'
                        onChange={handleFileChange}
                    />
                    <button
                        type='submit'
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Registration;
