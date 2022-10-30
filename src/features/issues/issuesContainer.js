import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllIssues } from './issueSlice';

const IssuesContainer = () => {
  const { issues } = useSelector(selectAllIssues);
  return (
    <div className='flex flex-col gap-2 p-2 w-full'>
      <h3 className='font-bold text-lg text-blue-600'>
        All active Issues Today
      </h3>

      <div className='flex flex-col w-11/12 mx-auto'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full'>
                <thead className='bg-white border-b'>
                  <tr>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      #
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Issue
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Description
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Priority
                    </th>
                    <th
                      scope='col'
                      className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {issues.map((issue) => {
                    return (
                      <tr className='bg-gray-100 even:bg-white border-b'>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                          {issue.id}
                        </td>
                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                          {issue.title}
                        </td>
                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                          {issue.excerpts}
                        </td>
                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                          {issue.priority}
                        </td>
                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
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

export default IssuesContainer;
