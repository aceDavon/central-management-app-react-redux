import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectAllIssues } from '../issues/issueSlice';

const Dashboard = () => {
  const { issues } = useSelector(selectAllIssues);
  return (
    <div className='w-full flex flex-col'>
      <div className='px-2 py-2 border-b'>
        <nav className='rounded-md w-full'>
          <ol className='list-reset flex'>
            <li>
              <a href='#' className='text-blue-600 hover:text-blue-700'>
                Home
              </a>
            </li>
            <li>
              <span className='text-gray-500 mx-2'>/</span>
            </li>
            <li>
              <a href='#' className='text-blue-600 hover:text-blue-700'>
                Users
              </a>
            </li>
            <li>
              <span className='text-gray-500 mx-2'>/</span>
            </li>
            <li className='text-gray-500'>Dashboard</li>
          </ol>
        </nav>
      </div>
      <div className='flex justify-end gap-4 px-4 py-2'>
        <div className='shadow-sm shadow-gray-200 rounded-md border-2 border-purple-600 h-20 w-36 px-2 py-2'>
          <p className='text-sm font-bold'>Total Issues</p>
          <p className='text-lg text-center text-red-700'>24</p>
        </div>
        <div className='shadow-sm shadow-gray-200 rounded-md border-2 border-purple-600 h-20 w-36 px-2 py-2'>
          <p className='text-sm font-bold'>Total tasks</p>
          <p className='text-lg text-center text-blue-700'>20</p>
        </div>
      </div>
      <h3 className='font-bold text-lg text-blue-600'>
        All Tasks Assigned to you today
      </h3>
      <div class='flex flex-col w-11/12 mx-auto'>
        <div class='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div class='overflow-hidden'>
              <table class='min-w-full'>
                <thead class='bg-white border-b'>
                  <tr>
                    <th
                      scope='col'
                      class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      #
                    </th>
                    <th
                      scope='col'
                      class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Task
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Description
                    </th>
                    <th
                      scope='col'
                      class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Deadline
                    </th>
                    <th
                      scope='col'
                      class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {issues.map((issue) => {
                    return (
                      <tr class='bg-gray-100 even:bg-white border-b'>
                        <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                          {issue.id}
                        </td>
                        <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                          {issue.title}
                        </td>
                        <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                          {issue.excerpts}
                        </td>
                        <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                          {issue.date.days} days
                        </td>
                        <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                          {issue.resolved ? 'Completed' : 'Pending'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
