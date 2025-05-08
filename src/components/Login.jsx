import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const SITE_KEY = "6LdAuTArAAAAAOvzLneXxBFMu5p89T0SyoXNaAIx"
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        recaptchaVerified: false
    })

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleRecaptchaChange = (value) => {
        console.log(value)

        const isVerified = value ? true : false

        setFormData({
            ...formData,
            recaptchaVerified: isVerified
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email != 'admin@gmail.com') return;
        if (formData.password != 'admin123') return;
        if (!formData.recaptchaVerified) return;

        alert('Login Successful')
    }

    return (
        <div className='flex justify-center'>
            <form action="" onSubmit={handleSubmit}>

                <h1 className='text-5xl text-center font-bold my-10'>Login Form</h1>

                <div className='flex flex-col mb-4'>
                    <label htmlFor="" >Enter Email</label>
                    <input type="text" name='email' id='email' className='text-xl border-2 border-gray-400 rounded-lg p-1' onChange={handleChange} value={formData.email} />
                </div>

                <div className='  flex flex-col mb-4'>
                    <label htmlFor="">Enter Password</label>
                    <input type="password" name='password' id='password' className='text-xl border-2 border-gray-400 rounded-lg p-1' onChange={handleChange} value={formData.password} />
                </div>

                <div className="mb-4">
                    <ReCAPTCHA sitekey={SITE_KEY}
                        onChange={handleRecaptchaChange} />
                </div>

                <div className='flex justify-center mb-4'>
                    <button type="submit" className=" cursor-pointer bg-blue-400 hover:bg-blue-600 p-2 rounded-lg " >Login</button>

                </div>

            </form>
        </div>
    )
}

export default Login