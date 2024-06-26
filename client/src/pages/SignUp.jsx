
import { Link } from 'react-router-dom';
import { TextInput, Label, Button } from 'flowbite-react';



export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*left*/}
        <div className="flex-1">
        <Link to="/" className='self-center  text-sm sm:text-xl font-bold dark:text-white'>
        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white px-2 py-1'>
          JYOs
        </span>
        Blog
      </Link>
      <p className='text-sm mt-5'>
        This is a demo project. You can sign up with your email and password or with google.
      </p>
        </div>
        {/*right*/}

        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div className=''>
              <Label value='Your username' />
                <TextInput
                 type='text'
                 placeholder='Username'
                 id='username' />

             
            </div>
            <div className=''>
              <Label value='Your Email' />
                <TextInput
                 type='text'
                 placeholder='name@company.com'
                 id='email' />

              
            </div>
            <div className='mb-4'>
              <Label value='Your Password' />
                <TextInput
                 type='text'
                 placeholder='Password'
                 id='password' />

              
            </div>
            <Button gradientDuoTone={'purpleToPink'} type='submit'>
              Sign Up
            </Button>

            
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>
                Have an account?
              </span>
              <Link to='/sign-in' className='text-blue-500'>
              Sign in
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
