import React from 'react'
import { useForm } from "react-hook-form"



const SignIn = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

  return (
    <div className=''>
        <form className='w-[300px] h-[400px] flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
    </div>
  )
}

export default SignIn