import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllUsers } from '../features/users/userSlice';
import { Bug, EditAccount, Support, Task } from '../Icons'

const SideBar = () => {
  const { isAdmin } = useSelector(selectAllUsers);
  return (
    <div className="w-60 h-full shadow-md bg-white" id="sidenavSecExample">
      <div className="pt-4 pb-2 px-6">
        <Link to="#!">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                className="rounded-full w-10"
                alt="Avatar"
              />
            </div>
            <div className="grow ml-3">
              <p className="text-sm font-semibold text-blue-600">User 1</p>
            </div>
          </div>
        </Link>
      </div>
      <ul className="relative px-1">
        <li className="relative">
          <Link
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            to="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <EditAccount />
            <span>Edit Profile</span>
          </Link>
        </li>
        <li className="relative" id="sidenavSecEx2">
          <a
            href="/#"
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx2"
          >
            <Bug />
            <span>Issues</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </a>
          <ul
            className="relative accordion-collapse collapse"
            id="collapseSidenavSecEx2"
            aria-labelledby="sidenavSecEx2"
            data-bs-parent="#sidenavSecExample"
          >
            <li className="relative">
              <Link
                to="/issues/create"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                Add an Issue for Review
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/issues/all"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                All My Issues
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative" id="sidenavSecEx3">
          <a
            href="/#"
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx3"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx3"
          >
            <Task />
            <span>Tasks</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </a>
          <ul
            className="relative accordion-collapse collapse"
            id="collapseSidenavSecEx3"
            aria-labelledby="sidenavSecEx3"
            data-bs-parent="#sidenavSecExample"
          >
            <li className="relative">
              <Link
                to="/tasks/create"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                Create Task
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/tasks/all"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                My Tasks
              </Link>
            </li>
            {isAdmin && (
              <li className="relative">
                <Link
                  to="/tasks/assign"
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  Assign Tasks
                </Link>
              </li>
            )}
          </ul>
        </li>
        <li className="relative" id="sidenavSecEx3">
          <a
            href="/#"
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx4"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx4"
          >
            <Support />
            <span>Support</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </a>
          <ul
            className="relative accordion-collapse collapse"
            id="collapseSidenavSecEx4"
            aria-labelledby="sidenavSecEx4"
            data-bs-parent="#sidenavSecExample"
          >
            <li className="relative">
              <Link
                to="/support/create"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                Submit A support Ticket
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/support/all"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                My Tickets
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <hr className="my-2" />
    </div>
  );
}

export default SideBar;