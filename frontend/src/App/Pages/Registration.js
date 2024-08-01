import React, { useState } from 'react'

const Registration = () => {
    const [formdata, setformdata] = useState({})
    

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setformdata(values => ({ ...values, [name]: value }))

    }

    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(formdata)

       }
       
       

    return (
        <div className=' flex justify-center items-center mt-5  flex-col '>
            <div>
                <h1 className=' text-3xl font-bold'>Welcome to Registration Page</h1>
            </div>
            <div className=' mt-5'>
                <form>
                    <label>Name: </label>
                    <br />
                    <input type='text' placeholder='Entre your name' border="dark-700" onChange={handelChange} name='Name' value={formdata.Name} />
                    <br />
                    <label>Email: </label>
                    <br />
                    <input type='text' placeholder='Entre your Email' border="dark-700" onChange={handelChange} name='Email' value={formdata.Email} />
                    <br />
                    <label>Password: </label>
                    <br />
                    <input type='password' placeholder='Entre your Password' border="dark-700" onChange={handelChange} name='Password' value={formdata.Password} />
                    <br />
                    <br />

                    <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                    onClick={handelSubmit}>Save</button>


                </form>
            </div>

        </div>
    )
}

export default Registration