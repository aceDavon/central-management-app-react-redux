import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommonInput from '../../common/commonInput';
import CommonModal from '../../common/commonModal';
import CommonSelect from '../../common/commonSelect';
import CommonTextArea from '../../common/commonTextArea';
import FormState from '../../common/formState';
import { addTask, catchErr, selectAllTasks } from './taskSlice';

  const categories = [
    { label: 'personal'},
    { label: 'work' },
    { label: 'default' },
  ];

const CreateTask = () => {
  const {value, handleChange} = FormState({});
  const dispatch = useDispatch();
  const { errors } = useSelector(selectAllTasks)

  const {title, excerpts, description, category, date } = value;

  const modalHeader = 'Task Created';
  const modalBody = `${title} Added successfully, click to continue to dashboard`;
  const btnText = 'Proceed';

  const validate = () => {
    const temp = {}
    temp.titleErr = title ? '' : 'Please enter a name for the task';
    temp.excerptsErr = excerpts ? '' : 'Write a brief description';
    temp.descErr = description ? '' : 'Describe the task you are adding';
    temp.categoryErr = category ? '' : 'Select a category from the dropdown';
    temp.dateErr = date ? '' : 'Choose a deadline for your task'
    dispatch(catchErr(temp));

    return Object.values(temp).every(x => x === '');
  }

  const handleSubmit = () => {
    const isoDate = new Date(date)

    validate() ? dispatch(addTask(title, description, category, excerpts, isoDate)) : catchErr('failed')

  }
  return (
    <form className='xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 relative'>
      {errors.titleErr === '' && (
        <CommonModal
          modalBody={modalBody}
          modalHeader={modalHeader}
          btnText={btnText}
        />
      )}
      <div className='mb-6'>
        <CommonInput
          sx={
            'form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          }
          name='title'
          placeholder='Name Task'
          onchange={(e) => handleChange(e)}
        />
      </div>

      <div className='mb-6'>
        <CommonInput
          sx={
            'form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          }
          name='excerpts'
          placeholder='Nickname task'
          onchange={(e) => handleChange(e)}
        />
      </div>
      <div className='mb-6'>
        <CommonInput
          sx={
            'form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          }
          name='date'
          type='date'
          onchange={(e) => handleChange(e)}
        />
      </div>
      <div className='mb-6'>
        <CommonSelect
          sx={
            'form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          }
          name='category'
          placeholder='Nickname task'
          options={categories}
          onchange={(e) => handleChange(e)}
        />
      </div>
      <div className='mb-6'>
        <CommonTextArea
          sx={
            'form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          }
          name='description'
          placeholder='Describe task'
          rows={6}
          cols={10}
          onchange={(e) => handleChange(e)}
        />
      </div>
      <div className='text-center lg:text-left'>
        <button
          type='button'
          className='inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          onClick={() => handleSubmit()}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
