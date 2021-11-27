import React from 'react'
const Registration = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='text'
              name='Fname'
              id='Fname'
              placeholder='Enter your First name'
              required
            />
            <input
              type='text'
              name='Lname'
              id='Lname'
              placeholder='Enter your Last name'
              required
            />
            <input
              type='text'
              name='Age'
              id='Age'
              placeholder='Enter your Age'
              required
            />
            <input
              type='text'
              name='Phone'
              id='Phone'
              placeholder='Enter your phone Numnber'
              required
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='ENter your email address'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Create your password'
            />
            <input
              type='password'
              name='password2'
              id='password2'
              placeholder='Confirm your password'
            />
            <button type='submit'>Create Your Account</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Registration
