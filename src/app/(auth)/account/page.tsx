
'use client'

import { loginUser, registerUser } from "@/redux/slices"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Account = () => {
    const dispatch = useDispatch()
    const users = useSelector((state: any) => state.education.users)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    const handleRegisterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value
        })
    }

    const handleRegisterSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        if (registerData.password !== registerData.confirmPassword) {
            alert('Passwords do not match')
            return
        }

        const result = dispatch(registerUser({
            id: Date.now(),
            email: registerData.email,
            username: registerData.username,
            password: registerData.password
        }))

        alert('Registration successful!')
        console.log('Registered user:', registerData)
    }

    const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const user = users.find(
            (user: {
                id: number
                username: string
                email: string
                password: string
            }) =>
                (user.email === loginData.email ||
                    user.username === loginData.email) &&
                user.password === loginData.password
        )

        if (!user) {
            alert("Invalid email/username or password")
            return
        }

        dispatch(loginUser({
            identifier: loginData.email,
            password: loginData.password
        }))

        alert("Login successful!")
    }

    return (
        <div className="flex justify-center items-center gap-[30px] pt-[56px] pl-[71px] pr-[71px] max-lg:flex-col max-lg:pl-6 max-lg:pr-6 max-lg:gap-6 max-lg:pb-8 max-sm:pt-6 max-sm:pl-4 max-sm:pr-4">

            {/*Login*/}
            <form
                onSubmit={handleLoginSubmit}
                className="border border-[#EAEAEA] w-[609px] rounded-[20px] bg-[#FFFFFF] h-[406px] max-lg:w-full max-lg:max-w-[609px] max-sm:h-auto"
            >
                <div className="p-[30px] max-sm:p-5">
                    <h1 className="mb-[30px] text-[#000000] font-semibold text-[32px] max-sm:text-2xl max-sm:mb-5">
                        Login
                    </h1>

                    <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        value={loginData.email}
                        placeholder="Email or username*"
                        className="w-[549px] h-[48px] border border-[#9D9D9D] pl-[16px] mb-[20px] max-lg:w-full max-sm:text-sm"
                    />

                    <input
                        onChange={handleChange}
                        type="Password"
                        placeholder="Password*"
                        name="password"
                        value={loginData.password}
                        className="w-[549px] h-[48px] border border-[#9D9D9D] pl-[16px] mb-[20px] max-lg:w-full max-sm:text-sm"
                    />

                    <div className="flex items-center gap-2 mb-[20px]">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember" className="max-sm:text-sm">
                            Remember me
                        </label>
                    </div>

                    <input
                        type="submit"
                        value="Login"
                        className="w-[549px] h-[48px] flex justify-center items-center bg-[#FF782D] border rounded-3xl border-[#FF782D] cursor-pointer text-white mb-[20px] transition-all duration-300 ease-in-out hover:bg-[#e96520] hover:border-[#e96520] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 max-lg:w-full"
                    />

                    <p className="max-sm:text-sm">
                        Lost your password?
                    </p>
                </div>
            </form>

            {/*Register*/}
            <form
                onSubmit={handleRegisterSubmit}
                className="w-[585px] h-[448px] border border-[#EAEAEA] bg-[#FFFFFF] rounded-[20px] max-lg:w-full max-lg:max-w-[609px] max-sm:h-auto"
            >
                <h1 className="text-[#000000] font-semibold text-[32px] pt-[30px] pl-[30px] max-sm:text-2xl max-sm:pt-5 max-sm:pl-5">
                    Register
                </h1>

                <div className="flex flex-col justify-center items-center pt-[30px] max-sm:pt-5 max-sm:px-5">

                    <input
                        type="email"
                        onChange={handleRegisterChange}
                        value={registerData.email}
                        name="email"
                        placeholder="Email"
                        className="w-[549px] h-[48px] border border-[#9D9D9D] pl-[16px] mb-[20px] max-lg:w-full max-sm:text-sm"
                    />

                    <input
                        type="text"
                        onChange={handleRegisterChange}
                        placeholder="Username*"
                        value={registerData.username}
                        name="username"
                        className="w-[549px] h-[48px] border border-[#9D9D9D] pl-[16px] mb-[20px] max-lg:w-full max-sm:text-sm"
                    />

                    <input
                        type="Password"
                        onChange={handleRegisterChange}
                        placeholder="Password*"
                        value={registerData.password}
                        name="password"
                        className="w-[549px] h-[48px] border border-[#9D9D9D] pl-[16px] mb-[20px] max-lg:w-full max-sm:text-sm"
                    />

                    <input
                        type="Password"
                        onChange={handleRegisterChange}
                        placeholder="Confirm Password*"
                        value={registerData.confirmPassword}
                        name="confirmPassword"
                        className="w-[549px] h-[48px] border border-[#9D9D9D] pl-[16px] mb-[20px] max-lg:w-full max-sm:text-sm"
                    />

                    <input
                        type="submit"
                        value="Register"
                        className="w-[549px] h-[48px] flex justify-center items-center bg-[#FF782D] border rounded-3xl border-[#FF782D] cursor-pointer text-white mb-[20px] transition-all duration-300 ease-in-out hover:bg-[#e96520] hover:border-[#e96520] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 max-lg:w-full"
                    />

                </div>
            </form>

        </div>
    )
}

export default Account
