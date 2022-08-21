import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleModal } from '../features/issues/issueSlice';

const CommonModal = ({ modalHeader, modalBody, btnText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(handleModal());
    navigate('/users/dashboard', {replace: true})
  };
  return (
    <div className='w-6/12 h-1/4 shadow-lg flex flex-col gap-4 shadow-slate-200 rounded-md bg-gray-200 px-4 py-2 absolute top-1/4 left-1/4'>
      <h2 className='text-xl font-bold text-black'>{modalHeader}</h2>
      <hr />
      <p className='text-base leading-tight'>{modalBody}</p>
      <button
        className='bg-purple-500 text-white rounded-md shadow-lg shadow-gray-300'
        onClick={(e) => handleClick(e)}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CommonModal;
