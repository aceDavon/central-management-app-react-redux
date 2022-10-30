import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommonInput from '../../common/commonInput';
import CommonModal from '../../common/commonModal';
import CommonSelect from '../../common/commonSelect';
import CommonTextArea from '../../common/commonTextArea';
import FormState from '../../common/formState';
import { addIssue, catchErr, handleModal, selectAllIssues } from './issueSlice';
const categoryList = [
  { label: 'Personal', id: 1 },
  { label: 'Work', id: 2 },
  { label: 'Default', id: 3 },
];

const Priorities = [
  { label: 'default', id: 1 },
  { label: 'high', id: 2 },
  { label: 'medium', id: 3 },
  { label: 'low', id: 4 },
];

const modalHeader = 'Issue Created';
const modalBody = 'Issue Added successfully, click to continue to dashboard';
const btnText = 'Proceed'

const Issuecreate = () => {
  const { value, handleChange } = FormState({});
  const { err, reports } = useSelector(selectAllIssues);
  const dispatch = useDispatch();

  const validate = () => {
    let temp = {};
    temp.titleErr = value.title ? '' : 'Please entera title text for the issue';
    temp.excerptsErr = value.excerpts
      ? ''
      : 'Enter some descriptive header for the issue';
    temp.categoryErr = value.category ? '' : 'Select issue category';
    temp.descErr = value.description
      ? ''
      : 'Please describe the issue in detail';
    temp.priorityErr = value.priority ? '' : 'Select issue category';
    temp.dateErr = value.date ? '' : 'Select a dedaline for task completion';
    dispatch(catchErr(temp));

    return Object.values(temp).every((x) => x === '');
  };

  const { title, excerpts, category, priority, description, date } = value;
  const isoDate = new Date(date);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate()
      ? dispatch(
          addIssue(title, description, excerpts, category, priority, isoDate)
        )
      : console.log(err);
  };

  return (
    <div className='flex flex-col gap-2 align-top w-full relative'>
      {reports.issueAdd === '' && (
        <CommonModal
          modalBody={modalBody}
          modalHeader={modalHeader}
          btnText={btnText}
          dispatcher={handleModal}
        />
      )}
      <h1 className='text-blue-500 text-4xl'>Create Issues</h1>
      <form
        className='grid grid-cols-2 gap-2 md:grid-col-1 px-4 mx-auto w-8/12'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='flex flex-col col-span-6'>
          <CommonInput
            sx={
              'h-4 px-2 py-4 w-full border border-gray-300 focus:outline-none focus:bg-slate-200'
            }
            placeholder='title'
            type={'text'}
            name={'title'}
            onchange={(e) => handleChange(e)}
          />
          <span className='text-red-500 text-xs'>
            {err.titleErr && err.titleErr}
          </span>
        </div>
        <div className='flex flex-col col-span-6'>
          <CommonInput
            sx={
              'h-4 px-2 py-4 w-full border border-gray-300 focus:outline-none focus:bg-slate-200'
            }
            placeholder='Excerpts'
            type={'text'}
            name={'excerpts'}
            onchange={(e) => handleChange(e)}
          />
          <span className='text-red-500 text-xs'>
            {err.excerptsErr && err.excerptsErr}
          </span>
        </div>
        <div className='block col-span-12'>
          <div className='flex flex-col gap-1'>
            <span className='text-base'>Category: {category && category}</span>
            <CommonSelect
              sx={
                'h-4 px-2 py-4 w-full border border-gray-300 focus:outline-none focus:bg-slate-200 italic'
              }
              options={categoryList}
              name={'category'}
              onchange={(e) => handleChange(e)}
            />
            <span className='text-red-500 text-xs'>
              {err.categoryErr && err.categoryErr}
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-base'>Priority: {priority && priority}</span>
            <CommonSelect
              sx={
                'h-4 px-2 py-4 w-full border border-gray-300 focus:outline-none focus:bg-slate-200 italic'
              }
              options={Priorities}
              name={'priority'}
              onchange={(e) => handleChange(e)}
            />
            <span className='text-red-500 text-xs'>
              {err.priorityErr && err.priorityErr}
            </span>
          </div>
        </div>
        <div className='col-span-8'>
          <CommonInput
            sx={
              'h-4 px-2 py-4 w-full border border-gray-300 focus:outline-none focus:bg-slate-200'
            }
            placeholder='deadline'
            type={'date'}
            name={'date'}
            onchange={(e) => handleChange(e)}
          />
          <span className='text-red-500 text-xs'>
            {err.dateErr && err.dateErr}
          </span>
        </div>

        <div className='flex flex-col gap-1 col col-span-12'>
          <CommonTextArea
            cols={30}
            rows={10}
            name={'description'}
            sx={
              'w-full border border-gray-300 px-2 py-2 focus:outline-none focus:bg-slate-200 italic'
            }
            placeholder={'Describe Issue in detail'}
            onchange={(e) => handleChange(e)}
          />
          <span className='text-red-500 text-xs'>{err.desc}</span>
          <button className='btn bg-purple-500 w-40 rounded-md text-white text-sm hover:bg-purple-700 h-12'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Issuecreate;
