import React from 'react';
import { Facebook, LinkedIn, Twitter } from '../../Icons';

const Login = () => {
  return (
    <section className='h-screen'>
      <div className='px-6 h-full text-gray-800'>
        <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6'>
          <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0'>
            <img
              src='https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=612x612&w=0&h=wpCvmggedXRECWK-FVL98MMllubyevIrXuUu50fdCqE='
              className='w-full'
              alt='login image'
            />
          </div>
          <div className='xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0'>
            <form>
              <div className='flex flex-row items-center justify-center lg:justify-start'>
                <p className='text-lg mb-0 mr-4'>Sign in with</p>
                <button
                  type='button'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                  className='inline-block p-3 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1'
                >
                  <Facebook />
                </button>

                <button
                  type='button'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                  className='inline-block p-3 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1'
                >
                  <Twitter />
                </button>

                <button
                  type='button'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                  className='inline-block p-3 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1'
                >
                 <LinkedIn />
                </button>
              </div>

              <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
                <p className='text-center font-semibold mx-4 mb-0'>Or</p>
              </div>

              <div className='mb-6'>
                <input
                  type='text'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleFormControlInput2'
                  placeholder='Email address'
                  name='email'
                />
              </div>

              <div className='mb-6'>
                <input
                  type='password'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleFormControlInput2'
                  placeholder='Password'
                  name='psw'
                />
              </div>

              <div className='flex justify-between items-center mb-6'>
                <div className='form-group form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    id='exampleCheck2'
                    name='remember'
                  />
                  <label
                    className='form-check-label inline-block text-gray-800'
                    for='exampleCheck2'
                  >
                    Remember me
                  </label>
                </div>
                <a href='#!' className='text-gray-800'>
                  Forgot password?
                </a>
              </div>

              <div className='text-center lg:text-left'>
                <button
                  type='button'
                  className='inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Login
                </button>
                <p className='text-sm font-semibold mt-2 pt-1 mb-0'>
                  Don't have an account? {' '}
                  <a
                    href='#!'
                    className='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
