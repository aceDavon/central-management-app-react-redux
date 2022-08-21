import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../features/tasks/taskSlice';
import { Bell, Hamburger } from '../Icons';
import Logo from '../app/img/logo.png'

const Navbar = () => {
  const { tasks } = useSelector(selectAllTasks)
  return (
    <nav
      className=' relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light ' >
      <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
        <button
          className=' navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation' >
          <Hamburger />
        </button>
        <div
          className='collapse navbar-collapse flex-grow items-center'
          id='navbarSupportedContent' >
          <a
            className=' flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1'
            href='#' >
            <img
              src={Logo}
              style={{ height: '20px' }}
              alt=''
              loading='lazy'
            />
          </a>
          <ul className='navbar-nav flex flex-col pl-0 list-style-none mr-auto'>
            <li className='nav-item p-2'>
              <a
                className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0'
                href='#' >
                Dashboard
              </a>
            </li>
            <li className='nav-item p-2'>
              <a
                className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0'
                href='#'
              >
                Team
              </a>
            </li>
            <li className='nav-item p-2'>
              <a
                className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0'
                href='#'
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div className='flex items-center relative'>
          <div className='dropdown relative'>
            <button
              type='button'
              class='flex justify-center transition duration-150 ease-in-out'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              title={tasks.length < 1 ? 'You don\'t have any tasks assigned' : `You have ${tasks.length} tasks assigned`} >
              <a
                className=' text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center'
                href='#'
                id='dropdownMenuButton1'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false' >
                <Bell />
                <span className='text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5'>
                  {tasks.length}
                </span>
              </a>
            </button>

            <ul
              className=' dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0'
              aria-labelledby='dropdownMenuButton1' >
              <li>
                <a
                  className=' dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                  href='#' >
                  Action
                </a>
              </li>
              <li>
                <a
                  className=' dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                  href='#' >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className=' dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                  href='#' >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className='dropdown relative'>
            <a
              className='dropdown-toggle flex items-center hidden-arrow'
              href='#'
              id='dropdownMenuButton2'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                className='rounded-full'
                style={{ height: '25px', width: '25px' }}
                alt=''
                loading='lazy'
              />
            </a>
            <ul
              className=' dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0'
              aria-labelledby='dropdownMenuButton2'>
              <li>
                <a
                  className=' dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                  href='#'>
                  Action
                </a>
              </li>
              <li>
                <a
                  className=' dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                  href='#'
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className=' dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                  href='#'>
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
