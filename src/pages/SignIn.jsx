import React, { useState } from 'react'


export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {email, password } = formData;
  function onChange(e) {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.id]: e.target.value,
    })) 
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60' alt='keyimage' className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form action="" >
            <input className='w-full' type="email" id="email" value={email} onChange={onChange}/>
          </form>
        </div>
      </div>
    </section>
  )
}
